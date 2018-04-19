<template>
  <div
    class="goods-card font-0"
    :style="{ background: cardBg }"
    @click="$emit('on-click')"
  >
    <div
      v-if="isShowCheckbox"
      class="goods-card__checkbox ib-middle px-font-16 rem-width-40 text-center"
      :style="[imgHeightStyle, imgLineHeight]"
      @click="checkCard"
    >
      <i
        class="iconfont"
        :class="{
          [checkboxIconChecked]: isChecked,
          [checkboxIcon]: !isChecked,
          'bg-f2': isCheckboxDisable
        }"
        :style="isChecked ? mainColorStyle : null"
      />
    </div>
    <div
      class="goods-card__item ib-middle px-font-14 overflow-h px-padding-tb10"
      :style="itemWidthStyle"
    >
      <div
        class="goods-card__img fl px-margin-r10 bg-f2"
        :style="[imgWidthStyle, imgHeightStyle]"
      >
        <slot v-if="$slots.img" name="img" />
        <img :src="img ? img : imgDefault" width="100%" height="100%" v-else>
      </div>
      <div
        class="overflow-h position-r"
        :style="imgHeightStyle"
      >
        <p class="goods-card__name">{{ name }}</p>

        <div class="goods-card__item-info position-a bottom-0 left-0 width-100">
          <p class="color-c999 px-font-12" v-if="spec">{{ spec }}</p>
          <div>
            <div class="fr color-c999">
              <slot name="right">x{{ num }}</slot>
            </div>
            <div v-if="isMainPriceStyle" v-html="genderPrice(price)" />
            <span v-else>¥ 5.00 元</span>
          </div>
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
      type: Number,
      default: 80
    },
    contentHeight: {
      type: Number,
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
      default: true
    },
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
      return { width: this.isShowCheckbox ? `${325 / 37.5}rem` : '100%' }
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
      return val
    }
  },

  methods: {
    genderPrice(price, color = this.mainColor) {
      const num = Number(price).toFixed(this.priceFixed).split('.')
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

<style scoped>
  .goods-card__name {
    display: -webkit-box;
    overflow : hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
