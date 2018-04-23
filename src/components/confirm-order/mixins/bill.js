const BILL_DATA = [
  {
    id: 1,
    title: '普通发票'
  },
  {
    id: 2,
    title: '专用发票'
  }
]
const BILL_LIST = [
  {
    id: 1,
    title: '发票一一'
  },
  {
    id: 2,
    title: '发票二二'
  }
]

export default {
  data() {
    return {
      isOpenBill: false,
      showBillType: false,
      showBillList: false,
      billTypeData: BILL_DATA,
      currentBillType: BILL_DATA[0],
      billList: BILL_LIST,
      currentBill: BILL_LIST[0]
    }
  },
  methods: {
    handleSelectBillType(item) {
      this.currentBillType = item
    },
    handleSelectBill(item) {
      this.currentBill = item
    }
  }
}
