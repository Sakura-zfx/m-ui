// This file is auto gererated by build/bin/build-entry.js
// import 'weui/dist/style/weui.min.css'
// import '../src/style/component.css'
import AddressSelect from './components/address-select'
import ApproveSelect from './components/approve-select'
import Avatar from './components/avatar'
import BottomTab from './components/bottom-tab'
import BottomTabItem from './components/bottom-tab-item'
import Checkbox from './components/checkbox'
import CitySelect from './components/city-select'
import CommonSelect from './components/common-select'
import ConfirmOrder from './components/confirm-order'
import Empty from './components/empty'
import GoodsCard from './components/goods-card'
import LazyImg from './components/lazy-img'
import Mask from './components/mask'
import Msgbox from './components/msgbox'
import NumComputer from './components/num-computer'
import Popup from './components/popup'
import Tab from './components/tab'
import TagSelect from './components/tag-select'
import UserPanel from './components/user-panel'

const version = '0.0.44'
const components = [
  AddressSelect,
  ApproveSelect,
  Avatar,
  BottomTab,
  BottomTabItem,
  Checkbox,
  CitySelect,
  CommonSelect,
  ConfirmOrder,
  Empty,
  GoodsCard,
  LazyImg,
  Mask,
  Msgbox,
  NumComputer,
  Popup,
  Tab,
  TagSelect,
  UserPanel
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
