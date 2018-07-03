export default {
  online: /https/.test(location.href),
  local: !/uban360/.test(location.href),
  isDef(val) {
    return val !== undefined && val !== null
  },
  formatMoney(num, fix = 2) {
    return this.isDef(num) ? (num / 100).toFixed(fix) : 0.00
  },
  openUrl(url) {
    if (window.JSBridge) {
      window.JSBridge.native('openurl', {
        url,
        noDefaultMenu: 1,
        cookie: 1
      })
    } else {
      // eslint-disable-next-line
      alert('window.JSBridge 不存在')
    }
  },

  callParentJs(name, data) {
    let callUrl = 'native://callparentjs'
    callUrl += `?data=${JSON.stringify(data)}`
    callUrl += `&callback=${name}`

    // eslint-disable-next-line
    window.JSBridge._postToNative(callUrl)
    window.JSBridge.native('close')
  },

  setCallback(name, fn) {
    if (window.JSBridge) {
      window.JSBridge._callback[name] = fn
    } else {
      // eslint-disable-next-line
      alert('window.JSBridge 不存在')
    }
  },

  getTime(time) {
    const isTimeStamp = /^\d+$/.test(time)
    const obj = time ? new Date(isTimeStamp ? Number(time) : time) : new Date()
    const year = obj.getFullYear()
    let month = obj.getMonth() + 1
    let date = obj.getDate()

    month = month > 9 ? month : `0${month}`
    date = date > 9 ? date : `0${date}`
    return {
      year, month, date
    }
  }
}
