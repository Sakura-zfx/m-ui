<template>
  <m-popup
    :title="title"
    :no-title="noTitle"
    :confirm-text="confirmText"
    :content-height="contentHeight"
    :show-btn="confirmShow"
    :title-align="titleAlign"
    :visible="visible"
    :main-color="mainColor"
    @confirm="$emit('common-btn')"
    @toggle="$emit('toggle-show', false)"
  >
    <span v-if="$slots.icon" slot="icon">
      <slot name="icon" />
    </span>

    <template slot="content">
      <p class="address__empty" v-if="!commonList || commonList.length === 0">{{ emptyText }}</p>
      <van-cell-group v-else>
        <van-cell
          v-for="item in commonList"
          class="address-list__item"
          @click="addressSelect(item)"
          :style="getColorMain(addressIsCurrent(item))"
          :key="item.id"
        >
          <slot :row="item" />
          <van-icon
            v-show="addressIsCurrent(item)"
            slot="right-icon"
            name="success"
            class="van-cell__right-icon"
            :style="getColorMain(addressIsCurrent(item))"
          />
        </van-cell>
      </van-cell-group>
    </template>
  </m-popup>
</template>

<script>
import { Cell, CellGroup, Icon } from 'vant'
import MPopup from '../popup'

export default {
  name: 'address-select',

  components: {
    MPopup, Cell, CellGroup, Icon
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
    title: {
      type: String,
      default: '公共选择'
    },
    noTitle: {
      type: Boolean,
      default: false
    },
    contentHeight: {
      type: Number
    },
    titleAlign: {
      type: String,
      default: function () {
        return 'text-center'
      }
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    emptyText: {
      type: String,
      default: '暂无数据哦～'
    },
    confirmShow: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    commonList: {
      type: Array,
      default() {
        return []
      }
    },
    commonCurrent: {
      type: Object,
      default() {
        return null
      }
    }
  },

  methods: {
    getColorMain(predicate) {
      return predicate ? this.colorMain : null
    },

    isDef(val) {
      return val !== undefined && val !== null
    },

    addressIsCurrent(item) {
      return this.commonCurrent && this.commonCurrent.id === item.id
    },

    addressSelect(item) {
      this.$emit('common-select', item)
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
