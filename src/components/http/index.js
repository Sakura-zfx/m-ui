import axios from 'axios/dist/axios.min'
import qs from 'qs'
// import MyError from '../../utils/customError.js'

// const local = !/s/.test(location.protocol)
const local = /808/.test(location.port)

const search = (() => {
  const lSearch = location.search
  const searchObj = {}
  let key = ''
  if (lSearch) {
    const paramArr = lSearch.split('&')
    for (let i = 0; i < paramArr.length; i += 1) {
      key = paramArr[i].split('=')[0]
      key = key.replace(/\?/g, '')
      searchObj[key] = paramArr[i].split('=')[1]
    }
    return searchObj
  }
  return ''
})()

const defaultOp = {
  uri: {
    test: '/test'
  },
  baseURL: local ? 'http://app.e.uban360.net' : '',
  timeout: 20000,
  // eslint-disable-next-line
  toast: window.JSBridge ? window.JSBridge.toast : alert,
  loading: {
    open() {},
    close() {}
  },
  arrayFormat: 'repeat',
  contentType: 'application/x-www-form-urlencoded',
  headers: null,
  postDataStringifyType: 'qs',
  bindSentry: null,
  beforeCatch: null
}

export default class Http {
  local = local
  instance = null
  cacheRequest = {}
  loadingNum = 0
  cancelQueen = []

  constructor(options) {
    this.options = {
      ...defaultOp,
      ...options
    }
    this.init()
  }

  init() {
    const { timeout, baseURL, arrayFormat, contentType, headers } = this.options
    this.instance = axios.create({
      baseURL,
      timeout,
      withCredentials: true,
      // `paramsSerializer` is an optional function in charge of serializing `params`
      // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
      paramsSerializer(params) {
        return qs.stringify(params, { arrayFormat })
      },
      headers: {
        'Content-Type': contentType,
        ...(headers || {})
      }
    })
  }

  cancel(message = 'Operation canceled by the user.') {
    if (this.cancelQueen.length > 0) {
      this.cancelQueen.forEach(source => {
        if (source.cancel && source.cancel instanceof Function) {
          source.cancel(message)
        }
      })
      this.cancelQueen = []
    }
  }

  genCancelSource() {
    const source = axios.CancelToken.source()
    this.cancelQueen.push(source)
    return source
  }

  deletePrivateField(data) {
    if (data.loading !== undefined) {
      delete data.loading
    }
    if (data.toast !== undefined) {
      delete data.toast
    }
  }

  commonOptions(uriName, options) {
    return { ...options, uriName }
  }

  get(uriName, data = {}, options = {}) {
    if (!this.instance) {
      this.init()
    }

    let path = this.options.uri[uriName]
    if (data.mock) {
      path = `${location.origin}/static/${uriName}.json`
    }
    if (search && search.token) {
      /* eslint-disable-next-line */
      data.payToken = search.token
    }

    if (data.loading !== false) {
      this.showLoading()
    }
    const tmpData = { ...data }
    this.deletePrivateField(data)
    options = this.commonOptions(uriName, options)
    return this.instance.get(path, {
      params: data,
      cancelToken: this.genCancelSource().token
    })
      .then(response => this.commonThen(response, tmpData, options))
      .catch(error => this.commonCatch(error, tmpData, options))
  }

  post(uriName, data = {}, options = {}) {
    if (data.loading !== false) {
      this.showLoading()
    }

    const tmpData = { ...data }
    this.deletePrivateField(data)

    let reqData
    if (/json/.test(this.options.contentType)) {
      reqData = data
    } else if (this.options.postDataStringifyType === 'qs') {
      reqData = qs.stringify(data, { arrayFormat: this.options.arrayFormat })
    } else {
      reqData = JSON.stringify(data)
    }
    options = this.commonOptions(uriName, options)
    return this.instance.post(
      this.options.uri[uriName],
      reqData,
      { cancelToken: this.genCancelSource().token }
    )
      .then(response => this.commonThen(response, tmpData, options))
      .catch(error => this.commonCatch(error, tmpData, options))
  }

  postBinary(uriName, data = {}, options = {}) {
    if (data.loading !== false) {
      this.showLoading()
    }

    let path
    if (/http/.test(uriName)) {
      path = uriName
    } else {
      path = this.options.baseURL + this.options.uri[uriName]
    }

    const blobData = new Blob([JSON.stringify(data)], { type: 'text/plain' })
    options = this.commonOptions(uriName, options)
    return axios({
      url: path,
      method: 'post',
      data: blobData,
      headers: {
        'Content-Type': 'application/octet-stream'
      }
    })
      .then(response => this.commonThen(response, data, options))
      .catch(error => this.commonCatch(error, data, options))
  }

  commonThen(response, data) {
    if (data.loading !== false) {
      this.hideLoading()
    }

    const res = response.data
    if (/DOCTYPE/.test(res)) {
      return Promise.reject(res)
    }

    if (res.data === undefined) {
      // gateway
      res.data = res.value
    }

    if (res.success) {
      return res
    }

    // return Promise.reject(res, data, options)
    return Promise.reject(res)
  }

  commonCatch(error, data, options) {
    if (data.loading !== false) {
      this.hideLoading()
    }

    // cancel request do nothing
    if (error.__CANCEL__) {
      return Promise.reject(error)
    }

    // 统一错误回调
    const { beforeCatch } = this.options
    if (beforeCatch instanceof Function) {
      beforeCatch(error, data, options)
    }

    if (data.toast !== false) {
      let msg = '服务异常，请稍后再试'
      if (error && !/DOCTYPE/.test(error)) {
        msg = error.msg || (error.error ? error.error.name : error.message) || msg
      }
      this.options.toast(msg)
    }

    this.capture(Object.assign(error, { params: data }), '接口异常')
    return Promise.reject(error)
  }

  showLoading() {
    this.loadingNum += 1
    this.options.loading.open()
  }

  hideLoading() {
    this.loadingNum -= 1
    if (this.loadingNum < 0) {
      this.loadingNum = 0
    }
    if (this.loadingNum <= 0) {
      this.options.loading.close()
    }
  }

  inject(method, name, path, force) {
    if (this.cacheRequest[name] && !force) {
      return this.cacheRequest[name]
    }

    const fn = data => {
      this.options.uri[name] = path
      return this[method](name, data)
    }

    this.cacheRequest[name] = fn
    return fn
  }

  isUriExist(name) {
    return Boolean(this.options.uri[name])
  }

  capture(error) {
    const { bindSentry } = this.options
    if (bindSentry && bindSentry.open) {
      bindSentry.capture(error, error.name)
      // throw new Error('bindSentry参数传入不正确，应该为引入的sentry对象（推荐）或第三方Sentry的实例')
    }
  }
}
