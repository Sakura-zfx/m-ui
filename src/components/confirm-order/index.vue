<template>
  <div class="m-confirmOrder__wrap bg-f2">
    <div class="m-confirmOrder__top position-f top-0 left-0 width-100 px-bottom-60 overflow-a touch-scroll">
      <!--收货地址 开始-->
      <cell
        :class="addressCustomStyle"
        :border="false"
        @click="toggle('showAddressPopup')"
        is-link
      >
        <template v-if="isDef(addressCurrent)" slot="title">
          <p class="font-bold color-dark">{{ addressCurrent.formatName }}</p>
          <p class="van-cell-text color-c999">{{ addressCurrent.formatAddress }}</p>
        </template>
        <p class="color-c999" v-else>请选择地址</p>
      </cell>
      <!--收货地址 结束-->

      <div class="confirm-order__business-content px-margin-tb10">
        <slot/>
      </div>

      <cell-group>
        <cell
          v-if="false"
          title="消费方式"
          :value="currentPayType.title"
          @click="toggle('showPayType')"
          is-link
        />
        <cell
          title="选择审批单"
          @click="onClickApprove"
          is-link
        >
          <p v-if="isDef(approveCurrent)">{{ approveCurrent.approveReason }}</p>
          <p class="color-c999" v-else>请选择</p>
        </cell>
        <cell
          title="支付方式"
          :value="selectPayWay ? selectPayWay.title : '请选择'"
          @click="toggle('showPayWay')"
          is-link
        />
        <cell>
          <template slot="title">
            <span class="van-cell__text">开具发票</span>
          </template>
          <m-switch
            size="22px"
            :value="isOpenBill"
            @change="val => $emit('on-change-open-bill', val)"
          />
        </cell>
        <template v-if="isOpenBill">
          <cell
            title="发票类型"
            :value="currentSelectBillType ? currentSelectBillType.title : '请选择'"
            @click="toggle('showBillType')"
            is-link
          />
          <cell
            title="发票信息"
            :value="currentSelectBill.title"
            @click="onClickBillCell"
            is-link
          />
        </template>
      </cell-group>

      <div class="px-padding-10 bg-fff px-margin-t10">
        <p>
          <span>商品金额</span>
          <span class="color-red fr">{{ skuMoney | formatPrice }}</span>
        </p>
        <p>
          <span>运费</span>
          <span class="color-red fr">+ {{ freightMoney | formatPrice }}</span>
        </p>
        <p class="text-right">
          <span class="font-bold color-c000">总价：</span>
          <span class="color-red">{{ totalPrice | formatPrice }}</span>
        </p>
      </div>
    </div>

    <div class="m-confirmOrder__bottom position-f bottom-0 px-height-50 px-line-50 width-100 left-0 bg-fff">
      <submit-bar
        :price="totalPrice"
        label="实付款："
        button-text="提交订单"
        @submit="$emit('on-submit')"
      />
    </div>

    <m-address-select
      :visible="showAddressPopup"
      :address-list="addressList"
      :address-current="addressCurrent"
      :main-color="mainColor"
      @toggle-show="toggle('showAddressPopup', false)"
      @address-add="$emit('address-add')"
      @address-select="item => $emit('address-select', item)"
    >
      <template slot-scope="scope">
        <span>{{ scope.row.formatAddress }}</span>
      </template>
    </m-address-select>

    <m-approve-select
      :visible="showApprovePopup"
      :approve-list="approveList"
      :approve-current="approveCurrent"
      :main-color="mainColor"
      @toggle-show="toggle('showApprovePopup', false)"
      @approve-select="handleSelectApprove"
    />

    <common-select
      title="消费方式"
      :visible="showPayType"
      :confirm-show="false"
      :common-list="payTypeData"
      :common-current="currentPayType"
      :main-color="mainColor"
      @toggle-show="val => toggle('showPayType', val)"
      @common-select="handleSelectPayType"
    >
      <span slot-scope="scope">{{ scope.row.title }}</span>
    </common-select>

    <common-select
      title="发票类型"
      :visible="showBillType"
      :confirm-show="false"
      :common-list="billTypeList"
      :common-current="currentSelectBillType"
      :main-color="mainColor"
      @toggle-show="val => toggle('showBillType', val)"
      @common-select="handleSelectBillType"
    >
      <span slot-scope="scope">{{ scope.row.title }}</span>
    </common-select>

    <common-select
      title="选择发票信息"
      :visible="showBillList"
      :confirm-show="false"
      :common-list="billList"
      :common-current="currentSelectBill"
      :main-color="mainColor"
      @toggle-show="val => toggle('showBillList', val)"
      @common-select="handleSelectBill"
    >
      <span slot-scope="scope">{{ scope.row.title }}</span>
    </common-select>

    <common-select
      title="支付方式"
      :visible="showPayWay"
      :confirm-show="false"
      :common-list="payWayData"
      :common-current="selectPayWay || {}"
      :main-color="mainColor"
      @toggle-show="val => toggle('showPayWay', val)"
      @common-select="handleSelectPayWay"
    >
      <template slot-scope="scope">
        <p>{{ scope.row.title }}</p>
        <span
          :class="{
            'color-c999': !selectPayWay || selectPayWay.id !== scope.row.id
          }"
        >
          {{ scope.row.msg }}
        </span>
      </template>
    </common-select>
  </div>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup, Icon, Switch, SubmitBar } from 'vant'
import MPopup from '../popup'
import MAddressSelect from '../address-select'
import MApproveSelect from '../approve-select'
import CommonSelect from '../common-select'
import payType from './mixins/payType'
import approve from './mixins/approve'
import address from './mixins/address'
import payWay from './mixins/payWay'
import bill from './mixins/bill'
import money from './mixins/money'

export default {
  name: 'confirm-order',

  components: {
    MPopup,
    MAddressSelect,
    MApproveSelect,
    CommonSelect,
    Cell,
    CellGroup,
    Icon,
    'MSwitch': Switch,
    SubmitBar
  },

  mixins: [payType, approve, address, payWay, bill, money],

  props: {
    mainColor: {
      type: String,
      default: 'red'
    }
  },

  data() {
    return {
    }
  },

  computed: {
    colorMain() {
      return { color: this.mainColor }
    }
  },

  created() {
    const Common = Vue.extend(CommonSelect)
    const commonInstance = new Common({
      el: document.createElement('div')
    })
    console.log(commonInstance)
  },

  methods: {
    getColorMain(predicate) {
      return predicate ? this.colorMain : null
    },

    isDef(val) {
      return val !== undefined && val !== null
    },

    toggle(field, type = true) {
      this[field] = type
    }
  }
}
</script>

<style lang="scss">
  .m-confirmOrder__wrap {
    .color-dark {
      color: #000;
    }
    .font-bold {
      font-weight: bold;
    }

    .cus-style {
      background-color: #f2f2f2;
    }
    .color-red {
      color: red;
    }
    .m-confirmOrder__top {
      .van-cell__value {
        height: 25px;
      }
    }
    .m-confirmOrder__bottom {
      box-shadow: 0 -1px 2px rgba(0,0,0,.2);
    }
  }
</style>
