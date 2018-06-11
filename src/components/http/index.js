import axios from 'axios/dist/axios.min'
import qs from 'qs'

const local = !/s/.test(location.protocol)

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
  allowCodes: []
}

export default class Http {
  instance = null

  cacheRequest = {}

  loadingNum = 0

  constructor(options) {
    this.options = {
      ...defaultOp,
      ...options
    }
    this.init()
  }

  init() {
    const { timeout, baseURL, allowCodes } = this.options
    this.instance = axios.create({
      baseURL,
      timeout,
      withCredentials: true,
      // `paramsSerializer` is an optional function in charge of serializing `params`
      // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
      paramsSerializer(params) {
        return qs.stringify(params, { arrayFormat: 'brackets' })
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    this.instance.interceptors.response.use(
      response => {
        this.hideLoading()

        const res = response.data
        if (res.data === undefined) {
          // gateway
          res.data = res.value
        }

        if (res.success) {
          return res
        }

        if (
          allowCodes.indexOf(res.code) === -1 &&
          allowCodes.indexOf(res.status) === -1
        ) {
          this.options.toast(res.error ? res.error.name : res.msg)
        }

        return Promise.reject(res)
      },
      error => {
        this.hideLoading()
        this.options.toast(error.msg || error.message || '服务异常，请稍后再试')
        return Promise.reject(error)
      }
    )
  }

  get(uriName, data = {}) {
    if (!this.instance) {
      this.init()
    }

    let path = this.options.uri[uriName]
    if (data.mock) {
      path = `${location.origin}/static/${uriName}.json`
    }
    if (search && search.token) {
      /* eslint-disable-next-line */
      data.token = search.token
    }

    this.showLoading()
    return this.instance.get(path, { params: data })
  }

  post(uriName, data = {}) {
    this.showLoading()
    return this.instance.post(
      this.options.uri[uriName],
      qs.stringify(data, { arrayFormat: 'brackets' })
    )
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
      // if (this.isUriExist(name)) {
      //   this.options.toast('request uri name is exist, will be overwritten')
      // }
      this.options.uri[name] = path
      return this[method](name, data)
    }

    this.cacheRequest[name] = fn
    return fn
  }

  isUriExist(name) {
    return Boolean(this.options.uri[name])
  }
}
