import utils from '../utils/utils'

export default {
  filters: {
    formatPrice(num) {
      return utils.formatMoney(num)
    }
  },
  methods: {
    formatPrice(num) {
      return utils.formatMoney(num)
    }
  }
}
