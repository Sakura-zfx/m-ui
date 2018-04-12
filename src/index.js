// This file is auto gererated by build/bin/build-entry.js
// import 'weui/dist/style/weui.min.css'
import Lazyimg from './components/lazyimg'
import Mask from './components/mask'
import Msgbox from './components/msgbox'
import Numcomputer from './components/numcomputer'
import Popup from './components/popup'
import Tab from './components/tab'
import Tagselect from './components/tagselect'

const version = '0.0.25'
const components = [
  Lazyimg,
  Mask,
  Msgbox,
  Numcomputer,
  Popup,
  Tab,
  Tagselect
]

const install = (Vue, config = {}) => {
  components.forEach(Component => {
    Vue.use(Component)
  })

  // Vue.use(InfiniteScroll)
  // Vue.use(Lazyload, {
  //  loading: require('./assets/loading-spin.svg'),
  //  attempt: 3,
  //  ...config.lazyload
  // })

  // Vue.$dialog = Vue.prototype.$dialog = Dialog
  // Vue.$toast = Vue.prototype.$toast = Toast
  // Vue.$toptips = Vue.prototype.$toptips = TopTips
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version
}

export default {
  install,
  version
}
