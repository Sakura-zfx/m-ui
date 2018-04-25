<template>
  <div class="m-goods-card-group">
    <div
      class="m-goods-card-group__title m-bd-b overflow-h px-padding-lr10 bg-fff"
      @click="$emit('on-click')"
    >
      <div v-if="$slots.info" class="fr m-goods-card-group__title-info">
        <slot name="info" />
      </div>
      <div class="m-goods-card-group__label font-0" @click.stop="$emit('on-label-click')">
        <div v-if="isShowCheckbox" class="ib-middle px-width-30">
          <checkbox
            v-model="groupChecked"
            :check-icon="checkIcon"
            :checked-icon="checkedIcon"
            @change="val => $emit('on-check-change', val)"
          />
        </div>
        <div class="px-font-14 ib-middle" v-if="$slots.label">
          <slot name="label" />
          <icon class="ib-middle color-ccc px-font-12" name="arrow"/>
        </div>
      </div>
    </div>

    <div class="m-goods-card-group__content">
      <slot />
    </div>

    <div
      v-if="$slots.bottom"
      class="m-goods-card-group__bottom text-right m-bd-t bg-fff"
    >
      <slot name="bottom" />
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'
import Checkbox from '../checkbox'

export default {
  components: {
    Checkbox, Icon
  },

  props: {
    isShowCheckbox: {
      type: Boolean,
      default: false
    },
    checkIcon: String,
    checkedIcon: String,
    isChecked: Boolean
  },

  data() {
    return {
      groupCheckValue: false,
      groupChecked: this.isChecked,
      goodsCardItem: []
    }
  },

  watch: {
    groupChecked(val) {
      this.goodsCardItem.forEach(goods => {
        if (!goods.isCheckboxDisable) {
          goods.isChecked = val
        }
      })
    },
    isChecked(val) {
      this.groupChecked = val
    }
  },

  methods: {
    checkGoodsCardAllChecked() {
      this.groupChecked = this.goodsCardItem.every(item => item.isChecked)
    }
  }
}
</script>

<style lang="scss">
  .m-goods-card-group {

  }
  .m-goods-card-group__title,
  .m-goods-card-group__bottom {
    line-height: 40px;
  }
</style>
