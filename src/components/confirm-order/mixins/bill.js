// const BILL_LIST = [
//   {
//     id: 1,
//     title: '发票一一'
//   },
//   {
//     id: 2,
//     title: '发票二二'
//   }
// ]

export default {
  data() {
    return {
      // isOpenBill: false,
      showBillType: false,
      showBillList: false
      // billTypeData: BILL_DATA
      // currentBillType: BILL_DATA[0],
      // billList: BILL_LIST,
      // currentBill: BILL_LIST[0]
    }
  },
  props: {
    isOpenBill: Boolean,
    billList: {
      type: Array,
      default() {
        return []
      }
    },
    billTypeList: {
      type: Array,
      default() {
        return []
      }
    },
    currentSelectBill: Object,
    currentSelectBillType: Object
  },
  methods: {
    handleSelectBillType(item) {
      // this.currentBillType = item
      this.$emit('on-change-bill-type', item)
    },
    handleSelectBill(item) {
      // this.currentBill = item
      this.$emit('on-change-bill', item)
    },
    onClickBillCell() {
      if (this.currentSelectBillType) {
        this.toggle('showBillList')
      }
    }
  }
}
