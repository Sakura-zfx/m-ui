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
      payWayData: [...PAY_WAY]
    }
  },
  props: {
    scopeDetail: [Object, null],
    selectPayWay: [Object, null]
  },
  watch: {
    scopeDetail(val) {
      this.setWayByScope(val)
    }
  },
  created() {
    // this.$emit('on-change-pay-way', PAY_WAY[0])
    this.setWayByScope(this.scopeDetail)
  },
  methods: {
    setWayByScope(value) {
      if (!value) {
        return
      }

      let selectPayWay = this.payWayData[0]
      if (!value.subscription || !value.buyer) {
        // 未订阅 或 非采购员 只支持个人支付
        selectPayWay = PAY_WAY[2]
        this.payWayData = [ selectPayWay ]
        // this.setByField({
        //   key: 'selectPayWay',
        //   value: selectPayWay
        // })
        this.$emit('on-change-pay-way', selectPayWay)
        // 未订阅提示语
        if (!value.subscription) {
          // !this.$cache.get('not-subscribe-message')
          // this.showSubscribeMessage = true
          this.$emit('on-show-warn-message')
        }
      } else if (!value.balance) {
        // 企业账户余额不足
        if (
          this.relationApprove &&
          this.relationApprove.approveId
        ) {
          // 为采购员 且 关联了采购单
          this.payWayData = [ PAY_WAY[1] ]
        } else {
          this.payWayData = PAY_WAY.slice(1)
        }
        if (!this.selectPayWay || this.selectPayWay.type === 1) {
          // 未选择支付方式 或 支付方式为企业支付
          selectPayWay = PAY_WAY[1]
          // this.setByField({
          //   key: 'selectPayWay',
          //   value: selectPayWay
          // })
          this.$emit('on-change-pay-way', selectPayWay)
        }
      }

      // 当前支付方式不存在于支付列表中
      // 重置支付方式
      if (
        this.selectPayWay &&
        !this.payWayData.some(x => x.type === this.selectPayWay.type)
      ) {
        // this.setByField({
        //   key: 'selectPayWay',
        //   value: this.payWay[0]
        // })
        this.$emit('on-change-pay-way', this.payWayData[0])
      }
    },
    handleSelectPayWay(item) {
      // this.currentPayWay = item
      this.$emit('on-change-pay-way', item)
    }
  }
}
