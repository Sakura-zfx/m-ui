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

      <cell-group class="px-margin-t10">
        <cell
          title="消费方式"
          :value="currentPayType.title"
          @click="toggle('showPayType')"
          is-link
        />
        <cell
          title="选择审批单"
          @click="toggle('showApprovePopup')"
          is-link
        >
          <p v-if="isDef(approveCurrent)">{{ approveCurrent.approveReason }}</p>
          <p class="color-c999" v-else>请选择</p>
        </cell>

        <cell
          v-show="false"
          title="是否超标"
          value=""
          is-link
        />
        <cell
          v-show="false"
          title="超标原因"
          value=""
          is-link
        />
        <cell
          v-show="false"
          title="保险"
          value=""
          is-link
        />

        <cell
          title="支付方式"
          :value="currentPayWay ? currentPayWay.title : ''"
          @click="toggle('showPayWay')"
          is-link
        />
        <cell
          v-show="false"
          title="配送时间"
          value=""
          is-link
        />
      </cell-group>

      <cell-group class="px-margin-t10">
        <cell>
          <template slot="title">
            <span class="van-cell__text">开具发票</span>
          </template>
          <m-switch
            size="22px"
            v-model="isOpenBill"
          />
        </cell>
        <template v-if="isOpenBill">
          <cell
            title="发票类型"
            :value="currentBillType.title"
            @click="toggle('showBillType')"
            is-link
          />
          <cell
            title="发票信息"
            :value="currentBill.title"
            @click="toggle('showBillList')"
            is-link
          />
        </template>

        <cell
          title="积分支付"
          value=""
          is-link
        />
        <cell
          v-show="false"
          title="手续费"
          value=""
          is-link
        />
        <cell
          v-show="false"
          title="服务费"
          value=""
          is-link
        />
      </cell-group>

      <div class="px-padding-10 bg-fff px-margin-t10">
        <p>
          <span>商品金额</span>
          <span class="color-red fr">2</span>
        </p>
        <p>
          <span>运费</span>
          <span class="color-red fr">+ 2</span>
        </p>
        <p class="text-right">
          <span class="font-bold color-c000">总价：</span>
          <span class="color-red">0</span>
        </p>
      </div>
    </div>

    <div class="m-confirmOrder__bottom position-f bottom-0 px-height-50 px-line-50 width-100 left-0 bg-fff">
      <submit-bar
        :price="3050"
        label="实付款："
        button-text="提交订单"
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
      :common-list="billTypeData"
      :common-current="currentBillType"
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
      :common-current="currentBill"
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
      :common-current="currentPayWay"
      :main-color="mainColor"
      @toggle-show="val => toggle('showPayWay', val)"
      @common-select="handleSelectPayWay"
    >
      <template slot-scope="scope">
        <p>{{ scope.row.title }}</p>
        <span
          :class="{
            'color-c999': !currentPayWay || currentPayWay.id !== scope.row.id
          }"
        >
          {{ scope.row.msg }}
        </span>
      </template>
    </common-select>
  </div>
</template>

<script>
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

  mixins: [payType, approve, address, payWay, bill],

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
