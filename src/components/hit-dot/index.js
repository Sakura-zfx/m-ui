import utils from '../../utils/utils'

// native://pagestat?data={eventId:"checkin", param:"123"}
const cacheDot = {} // 编号：{ key, id }
let fileArr = []
let dotName = []
let keyNumber = '编号'
let keyId = '事件id'
let keyName = '事件名称'

// @params filePath {String|Array} 打点文件的路径
function initDot(opts) {
  if (typeof opts !== 'object') {
    console.warn(
      `params is filePath {String|Array},
      dotCollectionName {String|Array},
      aliasId,aliasNumber,aliasName`
    )
    return
  }
  const {
    filePath,
    dotCollectionName,
    aliasId,
    aliasNumber,
    aliasName
  } = opts
  if (typeof filePath === 'string') {
    fileArr.push(filePath)
    dotName.push(dotCollectionName)
  } else {
    fileArr = filePath
    dotName = dotCollectionName
  }

  if (aliasId) {
    keyId = aliasId
  }
  if (aliasNumber) {
    keyNumber = aliasNumber
  }
  if (aliasName) {
    keyName = aliasName
  }
}

// @params filePath {String} 相对链接或绝对链接
// @params index {Number} 编号,文件或名称
function hitDot(number, index = 0) {
  const cacheKey = `${dotName[index]}_${number}`
  if (cacheDot[cacheKey]) {
    console.log('cache log')  // eslint-disable-line
    hitDotDirect(cacheDot[cacheKey][keyId], cacheDot[cacheKey][keyName])
    return
  }
  // 先加载对应的js文件
  utils.loadScript(fileArr[index]).then(() => {
    const numberItem = dotName[index].find(item => item[keyNumber])
    if (numberItem) {
      cacheDot[cacheKey] = numberItem
      hitDotDirect(numberItem[keyId], numberItem[keyName])
    }
  })
}

function hitDotDirect(eventId, param) {
  if (window.JSBridge === undefined) {
    console.warn('window.JSBridge is undefined')
    return false
  }

  if (typeof eventId !== 'string') {
    console.warn('eventId is required and must be a string')
    return false
  }

  console.log('hit log ok')  // eslint-disable-line
  window.JSBridge.native('pagestat', {
    eventId,
    param
  })
}

export default {
  initDot,
  hitDot,
  hitDotDirect
}
