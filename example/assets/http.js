import axios from 'axios'
// import utils from '../assets/js/utils'
// import cityTwoLevel from '../constant/cityTwoLevel'
// import { errorMsg } from '../constant'
// import { Toast, Indicator } from 'mint-ui'
// import Vue from 'vue'

// let domain = utils.debug ? '//app.e.uban360.net' : ''
// let token = 'eyJhcHBJZCI6IjQ3MjMzMjI5Iiwib3JnSWQiOjgzODE3LCJzY29wZUlkIjo5Nywic2lnbmF0dXJlIjoiNzk5ZGYwZDJjNjBmMGNlMGY5MzA2NzJiMzhiMDY3ODEiLCJzaXRlSWQiOjEsInRpbWVzdGFtcCI6MTUxMzI0NzgzMDQ4NSwidWlkIjoiMTAxMDEwMDExNzY4NjMyIn0='
// let token = 'eyJzaXRlSWQiOjEsInVpZCI6IjI2OTg0MCIsInNpZ25hdHVyZSI6IjUyMGI0NzAzZmQzZWIyNDFjOTI2NzU3MWQ1ZTdmNzA3Iiwib3JnSWQiOjgzODE3LCJhcHBJZCI6IjQ3MjMzMjI5Iiwic2NvcGVJZCI6OTcsInRpbWVzdGFtcCI6MTUxMjcxMzYzODAwMH0='
let token = 'eyJhcHBJZCI6IjQ3MjMzMjI5Iiwib3JnSWQiOjgzODE3LCJzY29wZUlkIjo5Nywic2lnbmF0dXJlIjoiZmU1ZjMzOTc5ZjRiMWVkNWQ4ZDM1NmZhYTZjYjMzMjUiLCJzaXRlSWQiOjEsInRpbWVzdGFtcCI6MTUxMzkzNDcyNDMwMCwidWlkIjoiMTAxMDEwMDEyNzE4MTkzIn0='
// let token = 'eyJzaXRlSWQiOjEsInVpZCI6IjEwMTAxMDAxMjc2NjM2MCIsInNpZ25hdHVyZSI6ImVkYjc1OTI1OTAzOTMzNDI3ZTJmNjViNjI5ZTg2YmQzIiwib3JnSWQiOjgzODE3LCJhcHBJZCI6IjQ3MjMzMjI5Iiwic2NvcGVJZCI6OTcsInRpbWVzdGFtcCI6MTUxNDQ0NDc2MzAwMH0='
// let token = 'eyJhcHBJZCI6IjQ3MjMzMjI5Iiwib3JnSWQiOjgzODE3LCJzY29wZUlkIjo5Nywic2lnbmF0dXJlIjoiNGU4MWUyZGZjOWE2ZDNjNzhkOTcwZmVkYmQ1MDlhN2EiLCJzaXRlSWQiOjEsInRpbWVzdGFtcCI6MTUxNjA5NzI5ODgzNSwidWlkIjoiMTAxMDEwMDEyNzE4MTkzIn0='

// 添加凭证
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
)
// 公用请求拦截
axios.interceptors.response.use(
  response => {
    if (response.data.success) {
      return response.data.data || response.data.value
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    // Toast(error.message || error.msg || '服务异常，请稍候重试' || 502)
    return Promise.reject(error)
  }
)

export const post = (url, data = {}) => {
  // data = utils.serialize(data)
  // resourceMethod.loadingFn && resourceMethod.loadingFn(data.showLoading)
  return axios.post(url, data)
}

export const get = (url, data = {}) => {
  // if (utils.debug) {
  //   data.token = token
  // }
  // 请求上无需加上token了
  // 后端做了兼容，前提是cookie字段存在
  // if (utils.token) {
  //   data.token = utils.token
  // } else if (utils.search && utils.search.token) {
  //   data.token = utils.search.token
  // }
  //   return Promise.resolve(cityTwoLevel.data)
  return axios.get(url, { params: data })
}
