function MyError(message = '未知的错误描述', name = '未知的错误名称') {
  const params = typeof message === 'object' ? JSON.stringify(message) : message
  this.name = name
  this.message = params
  this.stack = (new Error()).stack
}
MyError.prototype = Object.create(Error.prototype)
MyError.prototype.constructor = MyError

export default MyError
