import money from '../../../mixins/money'

export default {
  mixins: [money],
  data() {
    return {
    }
  },
  props: {
    freightMoney: [Number, String],
    skuMoney: [Number, String],
    totalMoney: [Number, String]
  },
  computed: {
    totalPrice() {
      return this.totalMoney ? this.totalMoney : (this.freightMoney + this.skuMoney)
    }
  }
}
