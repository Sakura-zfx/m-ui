// This file is auto gererated by build/bin/build-entry.js
import 'weui/dist/style/weui.min.css'
import Mask from './components/mask'
import Popup from './components/popup'
import Tab from './components/tab'

const version = '0.0.3'
const components = [
  Mask,
  Popup,
  Tab
]

const install = (Vue, config = {}) => {
  components.forEach(Component => {
    Vue.use(Component)
  })

  Vue.use(InfiniteScroll)
  Vue.use(Lazyload, {
    loading: require('./assets/loading-spin.svg'),
    attempt: 3,
    ...config.lazyload
  })

  Vue.$dialog = Vue.prototype.$dialog = Dialog
  Vue.$toast = Vue.prototype.$toast = Toast
  Vue.$toptips = Vue.prototype.$toptips = TopTips
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  Mask,
  Popup,
  Tab
}

export default {
  install,
  version
}
