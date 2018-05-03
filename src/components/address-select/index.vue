<template>
  <m-common-select
    title="选择地址"
    confirm-text="新建地址"
    empty-text="地址为空哦～"
    :visible="visible"
    :common-list="addressList"
    :common-current="addressCurrent"
    :main-color="mainColor"
    @toggle-show="type => $emit('toggle-show', type)"
    @common-btn="$emit('address-add')"
    @common-select="addressSelect"
  >
    <template slot-scope="scope">
      <slot :row="scope.row" />
    </template>
  </m-common-select>
</template>

<script>
import MCommonSelect from '../common-select'

export default {
  name: 'address-select',

  components: {
    MCommonSelect
  },

  props: {
    mainColor: {
      type: String,
      default: 'red'
    },
    visible: {
      type: Boolean,
      default: false
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
    }
  },

  methods: {
    addressSelect(item) {
      this.$emit('address-select', item)
      this.$emit('toggle-show', false)
    }
  }
}
</script>

<style lang="scss">
  .address__empty {
    text-align: center;
    padding-top: 80px;
    color: #9c9c9c;
  }
</style>
