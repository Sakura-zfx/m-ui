// native://pagestat?data={eventId:"checkin", param:"123"}
export default function hitDot(eventId, param = '') {
  if (window.JSBridge === undefined) {
    console.warn('window.JSBridge is undefined')
    return false
  }

  if (typeof eventId !== 'string') {
    console.warn('eventId is required and must be a string')
    return false
  }

  window.JSBridge.native('pagestat', {
    eventId,
    param
  })
}
