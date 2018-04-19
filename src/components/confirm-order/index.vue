<template>
  <div class="m-confirmOrder__wrap bg-f2">
    <div class="m-confirmOrder__top position-f top-0 left-0 width-100 px-bottom-60 overflow-a touch-scroll">
      <!--收货地址 开始-->
      <van-cell
        :class="addressCustomStyle"
        :border="false"
        @click="toggleShow('showAddressPopup')"
        is-link
      >
        <template v-if="isDef(addressCurrent)" slot="title">
          <p class="font-bold color-dark">{{ addressCurrent.formatName }}</p>
          <p class="van-cell-text color-c999">{{ addressCurrent.formatAddress }}</p>
        </template>
        <p class="color-c999" v-else>请选择地址</p>
      </van-cell>
      <!--收货地址 结束-->

      <van-cell-group class="px-margin-t10">
        <van-cell
          title="消费方式"
          value="因公消费"
          is-link
        />
        <van-cell
          title="选择审批单"
          @click="toggleShow('showApprovePopup')"
          is-link
        >
          <p v-if="isDef(approveCurrent)">{{ approveCurrent.approveReason }}</p>
          <p class="color-c999" v-else>请选择</p>
        </van-cell>

        <van-cell
          title="是否超标"
          value="因公消费"
          is-link
        />
        <van-cell
          title="超标原因"
          value="因公消费"
          is-link
        />
        <van-cell
          title="保险"
          value=""
          is-link
        />
        <van-cell
          title="支付方式"
          value=""
          is-link
        />
        <van-cell
          title="配送时间"
          value=""
          is-link
        />
        <van-cell
          title="发票类型"
          value=""
          is-link
        />
        <van-cell
          title="积分支付"
          value=""
          is-link
        />
        <van-cell
          title="手续费"
          value=""
          is-link
        />
        <van-cell
          title="服务费"
          value=""
          is-link
        />
        <van-cell
          title="运费"
          value=""
          is-link
        />
        <van-cell
          title="订单金额"
          value=""
          is-link
        />
      </van-cell-group>
    </div>
    <div class="m-confirmOrder__bottom position-f bottom-0 px-height-50 px-line-50 width-100 left-0 bg-fff">
      <span>1</span>
    </div>

    <m-address-select
      :visible="showAddressPopup"
      :address-list="addressList"
      :address-current="addressCurrent"
      :main-color="mainColor"
      @toggle-show="toggleShow('showAddressPopup', false)"
      @address-add="$emit('address-add')"
      @address-select="item => $emit('address-select', item)"
    />

    <m-approve-select
      :visible="showApprovePopup"
      :approve-list="approveList"
      :approve-current="approveCurrent"
      :main-color="mainColor"
      @toggle-show="toggleShow('showApprovePopup', false)"
      @approve-btn="$emit('approve-btn')"
      @approve-select="item => $emit('approve-select', item)"
    />
  </div>
</template>

<script>
import { Cell, CellGroup, Icon } from 'vant'
import MPopup from '../popup'
import MAddressSelect from '../address-select'
import MApproveSelect from '../approve-select'

const approveList = [
  {
    id: 1,
    approveReason: '审批单事由1',
    approveId: '23243545465768789'
  },
  {
    id: 2,
    approveReason: '审批单事由2',
    approveId: '23243545465768789'
  }
]

export default {
  name: 'confirm-order',

  components: {
    MPopup, MAddressSelect, MApproveSelect, Cell, CellGroup, Icon
  },

  computed: {
    colorMain() {
      return { color: this.mainColor }
    }
  },

  props: {
    mainColor: {
      type: String,
      default: 'red'
    },
    addressCustomStyle: {
      type: String,
      default: ''
    },
    addressList: {
      type: Array,
      default() {
        return []
      }
    },
    addressCurrent: {
      type: Object,
      default() {
        return null
      }
    },
    approveCurrent: {
      type: Object,
      default() {
        return null
      }
    }
  },

  data() {
    return {
      showAddressPopup: false,
      showApprovePopup: false,

      approveList
    }
  },

  methods: {
    getColorMain(predicate) {
      return predicate ? this.colorMain : null
    },

    isDef(val) {
      return val !== undefined && val !== null
    },

    // addressPanelClick(type = true) {
    //   this.showAddressPopup = type
    //   this.showApprovePopup = type
    // },
    toggleShow(field, type = true) {
      this[field] = type
    }

    // addressSelect(item) {
    //   this.$emit('address-select', item)
    // },

    // approveSelect(item) {
    //   this.$emit('approve-select', item)
    // }
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

    .van-cell__text {
      color: #9c9c9c;
    }

    .m-confirmOrder__bottom {
      box-shadow: 0 -1px 2px rgba(0,0,0,.2);
    }
  }
</style>
