<template>
  <div class="example-confirm">
    <m-confirm-order
      address-custom-style="cus-address-style"
      main-color="blue"
      :address-list="addressList"
      :address-current="addressCurrent"
      :approve-current="approveCurrent"
      @address-select="addressSelect"
      @address-add="addressAdd"
      @approve-select="approveSelect"
    />
  </div>
</template>

<script>
import CommonEntry from './commonEntry'
import MConfirmOrder from '../../src/components/confirmorder/index'

const addressList = [
  {
    id: 1,
    formatName: '杨明 18358185826',
    formatAddress: '浙江省杭州市西湖区蒋村街道808号',
    self: { id: 22 }
  },
  {
    id: 2,
    formatName: '杨明 18358185826',
    formatAddress: '赣州市天河区',
    self: { id: 22 }
  }
]

export default {
  name: 'confirm-page',

  components: {
    CommonEntry, MConfirmOrder
  },

  data() {
    return {
      addressList,
      addressCurrent: null,
      approveCurrent: null
    }
  },

  methods: {
    addressSelect(item) {
      this.addressCurrent = item
    },

    approveSelect(item) {
      this.$dialog.confirm({
        message: '选择前的逻辑判断'
      }).then(() => {
        this.approveCurrent = item
      })
    },

    addressAdd() {
      this.$dialog.alert({ message: '新建地址' }).then(() => {
        history.back()
      })
    }
  }
}
</script>

<style lang="scss">
  .cus-address-style {
    background: #fff url("../assets/images/bg-kuaidi.png") left bottom / 50px repeat-x;
  }
  .example-confirm {
    margin: -10px;
  }
</style>
