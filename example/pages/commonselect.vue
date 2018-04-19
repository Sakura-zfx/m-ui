<template>
  <common-entry title="通用选择">
    <p>Demo</p>
    <van-cell
      title="当前选择"
      is-link
      :value="currAddress"
      @click="toggleAddress()"
    />

    <m-common-select
      title="自定义title"
      confirm-text="自定义按钮"
      empty-text="自定义空文案"
      :visible="showCommonSelect"
      :common-list="commonSelectList"
      :common-current="commonSelectCurrent"
      @toggle-show="toggleAddress"
      @common-btn="clickBtn"
      @common-select="handleAddressSelect"
    >
      <span slot="icon">icon</span>
      <template slot-scope="scope">
        <span>{{ scope.row.formatName }}</span>
      </template>
    </m-common-select>

    <p class="px-margin-t20">Props 与 Events</p>
    <pre>
      title="自定义title"
      confirm-text="自定义按钮"
      empty-text="自定义空文案"
      :title-align="titleAlign"
      :no-title="noTitle"
      :content-height="contentHeight"
      :visible="showCommonSelect"
      :common-list="commonSelectList"
      :common-current="commonSelectCurrent"
      @toggle-show="toggleAddress"
      @common-btn="clickBtn"
      @common-select="handleAddressSelect"
    </pre>

    <p class="px-margin-t20">用法</p>
    <pre>
      &lt;address-select
        :visible="showAddress"
        :address-list="[]"
        :address-current="undefined"
        @toggle-show="toggleAddress"
        @address-add="clickBtn"
        @address-select="handleAddressSelect"
      &gt;
        &lt;span&gt;icon&lt;/span&gt;
        &lt;template slot-scope="scope"&gt;
          &lt;span>{\{ scope.row.formatName }}&lt;/span&gt;
        &lt;/template&gt;
      &lt;/address-select&gt;
    </pre>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import MCommonSelect from '../../src/components/common-select'
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
  name: 'common-select',

  components: {
    CommonEntry, MCommonSelect
  },

  computed: {
    currAddress() {
      return this.commonSelectCurrent ? this.commonSelectCurrent.formatAddress : '请选择'
    }
  },

  data() {
    return {
      showCommonSelect: false,
      commonSelectList: addressList,
      commonSelectCurrent: null
    }
  },

  methods: {
    toggleAddress(type = true) {
      this.showCommonSelect = type
    },

    clickBtn() {
      this.$dialog.alert({ message: 'ok' })
    },

    handleAddressSelect(item) {
      this.commonSelectCurrent = item
    }
  }
}
</script>

<style scoped>

</style>
