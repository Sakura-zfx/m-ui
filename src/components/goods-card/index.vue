<template>
  <div
    class="goods-card font-0"
    :style="{ background: cardBg }"
    @click="$emit('on-click')"
  >
    <div
      v-if="isShowCheckbox"
      class="goods-card__checkbox ib-top px-font-16 rem-width-40 text-center px-padding-tb10"
      :style="[imgHeightStyle, imgLineHeight]"
      @click.stop="checkCard"
    >
      <i
        class="iconfont color-c999"
        :class="{
          [checkboxIconChecked]: isChecked,
          [checkboxIcon]: !isChecked,
          'bg-f2': isCheckboxDisable
        }"
        :style="isChecked ? mainColorStyle : null"
      />
    </div>
    <div
      class="goods-card__item ib-top px-font-14 overflow-h px-padding-tb10"
      :style="itemWidthStyle"
    >
      <div
        class="goods-card__img fl bg-f2 position-r"
        :class="{
          'px-margin-r10': isShowCheckbox,
          'px-margin-lr10': !isShowCheckbox
        }"
        :style="[imgWidthStyle, imgHeightStyle]"
      >
        <slot v-if="$slots.img" name="img" />
        <img :src="img || imgDefault" width="100%" height="100%" v-else>

        <div v-if="isAbnormal" class="position-a width-100 height-100 top-0 left-0">
          <img :src="abnormalImg" width="100%" height="100%">
        </div>
      </div>
      <div
        class="overflow-h position-r"
        :style="itemHeightStyle"
      >
        <p
          class="goods-card__name"
          :class="{ 'color-c999': isAbnormal }"
        >
          {{ name }}
        </p>

        <div class="goods-card__item-info position-a bottom-0 left-0 width-100">
          <p class="color-c999 px-font-12" v-if="spec">{{ spec }}</p>
          <div class="fr color-c999">
            <slot v-if="$slots.right" name="right" />
            <template v-else-if="num !== undefined">x{{ num }}</template>
          </div>
          <div
            v-if="isMainPriceStyle && !isAbnormal"
            v-html="genderPrice(price)"
          />
          <span
            :class="{ 'color-c999': isAbnormal }"
            v-else
          >
            ¥ {{ (price / 100).toFixed(2) }} 元
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goods-card',

  props: {
    name: {
      type: String,
      required: true
    },
    img: String,
    num: [String, Number],
    imgDefault: String,
    imgHeight: {
      type: [String, Number],
      default: 80
    },
    contentHeight: {
      type: [String, Number],
      default: 80
    },
    mainColor: {
      type: String,
      default: 'red'
    },
    isMainPriceStyle: {
      type: Boolean,
      default: true
    },
    cardBg: {
      type: String,
      default: '#ffffff'
    },
    priceFixed: {
      type: Number,
      default: 2
    },
    price: {
      type: Number,
      default: 0
    },
    isShowCheckbox: {
      type: Boolean,
      default: false
    },
    // 非正常商品
    isAbnormal: {
      type: Boolean,
      default: false
    },
    abnormalImg: String,
    isCheckboxDisable: {
      type: Boolean,
      default: false
    },
    spec: String,
    isCheckboxChecked: Boolean,
    checkboxIcon: {
      type: String,
      default: 'icon-cell'
    },
    checkboxIconChecked: {
      type: String,
      default: 'icon-search'
    }
  },

  computed: {
    imgHeightStyle() {
      return { height: `${this.imgHeight}px` }
    },
    imgWidthStyle() {
      return { width: `${this.imgHeight}px` }
    },
    imgLineHeight() {
      return { lineHeight: `${this.imgHeight - 5}px` }
    },
    itemWidthStyle() {
      const width = this.isShowCheckbox ? 325 : 365
      return { width: `${width / 37.5}rem` }
    },
    itemHeightStyle() {
      return { height: `${this.contentHeight}px` }
    },
    mainColorStyle() {
      return { color: this.mainColor }
    }
  },

  data() {
    return {
      isChecked: this.isCheckboxChecked
    }
  },

  watch: {
    isCheckboxChecked(val) {
      this.isChecked = val
    },
    isChecked() {
      const { checkGoodsCardAllChecked } = this.$parent
      checkGoodsCardAllChecked && checkGoodsCardAllChecked()
    }
  },

  beforeCreate() {
    this.$parent.goodsCardItem && this.$parent.goodsCardItem.push(this)
  },

  methods: {
    genderPrice(price, color = this.mainColor) {
      const num = Number(price / 100).toFixed(this.priceFixed).split('.')
      return `<span class="rem-font-10" style="color: ${color}">¥ ` +
        `<span class="rem-font-16">${num[0]}</span>.<span>${num[1]}</span>` +
        `</span>`
    },

    checkCard() {
      if (!this.isCheckboxDisable) {
        this.isChecked = !this.isChecked
        this.$emit('on-check')
      }
    }
  }
}
</script>

<style>
  .goods-card__name {
    display: -webkit-box;
    overflow : hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .goods-card__checkbox i {
    border-radius: 8px;
  }
</style>
