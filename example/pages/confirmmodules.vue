<template>
  <common-entry title="确认订单模块">
    <div class="mg--10">
      <m-confirm-order
        ref="modules"
        biz-type="146"
        approve-title="关联采购单"
        :approve-current="selectApprove"
        :bill-method-current="billMethod"
        :bill-type-current="billType"
        :bill-current="bill"
        :is-open-bill="isOpenBill"
        :is-open-welfare="isOpenWelfare"
        :pay-way="payWay"
        :sku-money="1"
        :freight-money="33"
        :total-money="4999"
        :is-show-approve-cell="true"
        :welfare-max-use-num="200000"
        :is-over-stand="true"
        :travel-type="0"
        :service-rate="0.01"
        :scope-type="3"
        @select-approve="item => selectApprove = item"
        @cancel-select-approve="selectApprove = null"
        @change-open-bill="val => isOpenBill = val"
        @change-open-welfare="val => isOpenWelfare = val"
        @change-open-welfare-error="errorNotice"
        @select-bill-method="item => billMethod = item"
        @select-bill-type="item => billType = item"
        @select-bill="item => bill = item"
        @select-pay-way="item => payWay = item"
      />
    </div>

    <p class="px-margin-20">
      <a href="javascript:" @click="getModulesData">获取data</a>
    </p>
    <p>props</p>
    <pre>
      bizType: {
        type: [Number, String],
        required: true
      },
      mainColor: {
        type: String,
        default: 'red'
      },
      // 当前审批单，结构同中间页面选审批单一致
      approveCurrent: Object,
      // 发票相关
      isOpenBill: Boolean,
      billMethodCurrent: Object,
      billTypeCurrent: Object,
      billCurrent: Object,
      // 支付方式，因公消费时，个人垫付就是个人支付
      // { title: '企业支付', id: 1 },
      // { title: '个人垫付', id: 2 },
      // { title: '个人支付', id: 3 }
      payWay: Object,
      // 是否使用积分
      isOpenWelfare: Boolean,
      // 是否显示审批单
      isShowApproveCell: Boolean,
      // 商品金额
      skuMoney: Number,
      // 运费
      freightMoney: Number,
      // 总金额
      totalMoney: Number,
      // 积分使用的最大数量
      welfareMaxUseNum: Number,
      // 选审批单这一栏的标题label
      approveTitle: String,
      // 因公还是因私 0 因公；1 因私
      travelType: {
        // 默认因私消费
        type: Number,
        default: 1
      },
      // 是否超标
      isOverStand: Boolean,
      // 是否只有个人支付
      onlySelfPay: Boolean,
      // 业务类型 1机票 2火车票 3酒店 4打车
      scopeType: {
        type: [Number, String],
        default: 0
      },
      // 服务费率，例如0.06
      serviceRate: {
        type: Number,
        default: 0
      }
    </pre>
    <p>events</p>
    <pre>
      // 选择支付方式
      @select-pay-way="item => payWay = item"
      // 是否开启积分支付
      @change-open-welfare="val => isOpenWelfare = val"
      // 选择审批单
      @select-approve="item => selectApprove = item"
    </pre>
    <p>methods</p>
    <pre>
      // 获取data
      this.$refs.modules.getModulesData()
      // 重置积分
      this.$refs.modules.reInitWelfare()
    </pre>
  </common-entry>
</template>

<script>
// import { ConfirmModules } from 'xm-mui'
// import ConfirmOrder from 'xm-mui/lib/confirm-modules'
import CommonEntry from './commonEntry'
import ConfirmModules from '../../src/components/confirm-modules/index'
import { get, post } from '../assets/http'

export default {
  name: 'cell',

  components: {
    CommonEntry,
    MConfirmOrder: ConfirmModules
  },

  data() {
    return {
      selectApprove: null,
      // selectApprove: {
      //   'money': 5000.00,
      //   'balance': 5000.00,
      //   'approveReason': '公司每月发放的公费额度',
      //   'startTime': 1527782400000,
      //   'endTime': 1530374399999,
      //   id: 2485,
      //   quotaId: 2485,
      //   quotaType: 1,
      //   bizType: 146,
      //   onClick: true
      // },
      isOpenBill: false,
      billMethod: null,
      billType: null,
      bill: null,
      isOpenWelfare: true,
      payWay: null,
      get,
      post
    }
  },

  methods: {
    getModulesData() {
      console.log(this.$refs.modules.getModulesData())
    },
    errorNotice() {
      console.log('不支持积分')
    }
  }
}
</script>

<style scoped>

</style>
