const PAY_WAY = [
  {
    id: 1,
    title: '企业支付',
    msg: '企业采购(审批-企业支付-无需报销)'
  },
  {
    id: 2,
    title: '个人垫付',
    msg: '企业采购(审批-个人垫付-提交报销)'
  },
  {
    id: 3,
    title: '个人支付',
    msg: '个人消费'
  }
]

export default {
  data() {
    return {
      showPayWay: false,
      payWayData: PAY_WAY,
      currentPayWay: PAY_WAY[0]
    }
  },
  methods: {
    handleSelectPayWay(item) {
      this.currentPayWay = item
    }
  }
}
