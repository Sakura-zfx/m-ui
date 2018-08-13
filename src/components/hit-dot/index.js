const isIOS = /iPhone/.test(navigator.userAgent)

const defaultOptions = {
  moduleId: 0,
  eventId: 0,
  orgId: undefined,
  userId: undefined,
  platform: isIOS ? 'iOS' : 'android'
}

export default {
  options: {},
  init(moduleId) {
    if (typeof moduleId === 'number') {
      this.options.moduleId = moduleId
    } else if (typeof moduleId === 'object') {
      this.options = {...defaultOptions, ...moduleId}
    } else {
      throw new Error('moduleId is must')
    }
  },
  hit(eventId, moduleId = this.options.moduleId) {
    const { orgId, userId, platform } = this.options
    let url = 'https://admin.jituancaiyun.com/dot-log/log.json?' +
      `platform=${platform}&mid=${moduleId}&eid=${eventId}`

    if (userId) {
      url += `&userId=${userId}`
    }
    if (orgId) {
      url += `&orgId=${orgId}`
    }

    let img = new Image()
    img.src = url
    img.onload = img.onerror = () => {
      img = null
    }
  }
}
