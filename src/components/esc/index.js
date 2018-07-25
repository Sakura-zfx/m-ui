const online = /s/.test(location.protocol)
const domain = `http${online ? 's' : ''}://app.e.uban360.${online ? 'com' : 'net'}`
let escUrl = `${domain}/esc/app-entry-dist/index.html` +
  '?token={{token}}&bizType={{bizType}}&appId={{appId}}'

export default {
  online,
  domain,
  bizType: 0,
  token: '',

  init(bizType, token) {
    this.bizType = bizType
    this.token = token
    escUrl = escUrl.replace('{{token}}', token).replace('{{bizType}}', bizType)
    escUrl = escUrl.replace('{{appId}}', this.app[bizType].appId[online ? 1 : 0])
  },

  quotaUrl(cbName, selected) {
    return `${escUrl}#/select-quota?callback=${cbName}&selected=${selected}`
  },

  userUrl(cbName, color = '2277EE', travelType = 0, selected = '', num = '') {
    return `${escUrl}#/occupant-choose?callback=${cbName}` +
      `&color=${color}&travelType=${travelType}&selected=${selected}&num=${num}`
  },

  userEditUrl(cbName, color = '2277EE', travelType = 0, externalId, scenes = 1) {
    return `${escUrl}#/occupant-add?color=${color}&` +
    `scenes=1&travelType=${travelType}&` +
    `externalId=${externalId}&callback=${cbName}&scenes=${scenes}`
  },

  cityUrl(cbName, cityName, scenes) {
    return `${escUrl}#/city-choose?locateCityName=${encodeURIComponent(cityName)}&callback=${cbName}`
  },

  travelStandardUrl(showType = 3) {
    return `${escUrl.replace('/app-entry-dist/index.html?', `/app-entry/static-pages/travelStandard.html?showType=${showType}&`)}`
  },

  purchaseUrl(type = 0) {
    const app = ['jd', 'woyemai', 'malls']
    return `${escUrl.replace('/esc/app-entry-dist', `/${app[type]}`)}`
  },

  app: {
    3: {
      name: '滴滴出行',
      // dev, online
      appId: ['', 33537318]
    },
    18: {
      name: '同程商旅',
      appId: [94250101, 31326169]
    },
    22: {
      name: '京东商城',
      appId: [47233229, 66611037]
    },
    129: {
      name: '中粮我买',
      appId: [32285687, 93586565]
    },
    130: {
      name: '华住酒店',
      appId: [90105639, 51755657]
    },
    132: {
      name: '美团点评',
      appId: [40644953, 70454425]
    },
    139: {
      name: '优办商城',
      appId: [14814845, 36269069]
    },
    144: {
      name: '火车票预定',
      appId: [20988501, 55838831]
    },
    145: {
      name: '机票预定',
      appId: [81972047, 21441835]
    },
    146: {
      name: '携程酒店',
      appId: [36954139, 85927671]
    },
    156: {
      name: '福利商城',
      appId: [32694445, 71553559]
    }
  }
}
