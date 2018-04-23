export default {
  props: {
    addressCustomStyle: {
      type: String,
      default: ''
    },
    addressList: {
      type: Array,
      default() {
        return []
      }
    },
    addressCurrent: {
      type: Object,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      showAddressPopup: false
    }
  }
}
