// import utils from '../../utils/utils'
const isIOS = /iPhone/.test(navigator.userAgent)

// native://pagestat?data={eventId:"checkin", param:"123"}
export default {
  moduleId: 0,
  init(moduleId) {
    this.moduleId = moduleId
  },
  hit(eventId, moduleId = this.moduleId) {
    // `admin.jituancaiyun.com/dot-log/log.json?orgId=${orgId}&platform=${isIOS ? 'iOS' : 'android'}&mid=${mid}&eid=${eid}`
    const url = `https://admin.jituancaiyun.com/dot-log/log.json?` +
      `platform=${isIOS ? 'iOS' : 'android'}&mid=${moduleId}&eid=${eventId}`
    const img = document.createElement('img')
    img.src = url
    document.body.appendChild(img)
    document.body.removeChild(img)
  }
}
