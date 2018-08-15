<template>
  <common-entry title="确认订单模块">
    <div class="mg--10">
      <m-confirm-order
        ref="modules"
        biz-type="22"
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
        :travel-type="1"
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
