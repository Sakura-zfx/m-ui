<template>
  <div class="m-detail-title" :class="'m-detail-title__' + type">
    <div class="m-detail-title__content">
      <div :class="'m-detail-title__label-' + type">{{ label }}</div>
      <div :class="'m-detail-title__word-' + type">
        {{ brand ? brand : title }}
      </div>
    </div>
    <p
      v-if="brand"
      class="m-detail-title__info"
    >
      {{ title }}
    </p>
    <div class="m-detail-title__price">
      <div class="m-detail-title__price--left-wrap">
        <div class="m-detail-title__price--left" v-html="genPrice()" />
        <span v-if="oldPrice" class="m-detail-title__price--through">
          ¥ {{ (oldPrice / 100).toFixed(2) }}
        </span>
      </div>
      <div class="m-detail-title__price--right" v-if="$slots">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
@import "../../style/base.styl"
.m-detail-title
  padding 15px
  background-color #fff
  word-break break-all
  &__word
    &-zl,
    &-jd
      font-size 16px
    &-gj
      font-size 18px
  &__label
    &-jd
      background-color #FF4D4D
      margin-top 2px
    &-gj
      margin-top 4px
      background-color #c0a369
    &-zl
      margin-top 2px
      background-color #2DC888
  &__label-jd,
  &__label-gj,
  &__label-zl
    float left
    width 60px
    height 18px
    border-radius 9px
    color #fff
    font-size 12px
    margin-right 8px
    text-align center
  &__word
    font-weight bold
  &__info
    color #5C626B
    font-size 14px
    margin-top 5px

  &__price
    display flex
    align-items baseline
    justify-content space-between
    margin-top 10px
    &--left-wrap
      display flex
      align-items baseline
      color #FF4D4D
    &--left
      display flex
      align-items baseline
    &--size
      display flex
      margin-left 3px
      font-size 22px
      // font-weight bold
    &--through
      display flex
      text-decoration line-through
      margin-left 5px
    &--through,
    &--right
      color #959BA3
      font-size 12px
</style>

<script>
export default {
  filters: {
    format(price) {

    }
  },

  props: {
    title: {
      type: String,
      required: true
    },
    brand: {
      type: String
    },
    type: {
      type: String,
      default: 'jd'
    },
    label: {
      type: String,
      default: '时尚精选'
    },
    oldPrice: {
      type: [String, Number]
    },
    price: {
      type: Number,
      required: true
    }
  },

  methods: {
    genPrice() {
      const str = (this.price / 100).toFixed(2)
      const strIndex = str.indexOf('.')
      return `<span>¥</span>` +
        `<span class="m-detail-title__price--size">${str.substr(0, strIndex)}</span>` +
        `<span>${str.substring(strIndex)}</span>`
    }
  }
}
</script>
