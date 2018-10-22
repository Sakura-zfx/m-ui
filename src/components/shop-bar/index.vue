<template>
  <div class="m-shop-bar" @click="$emit('on-click')">
    <div class="m-shop-bar__left">
      <img :src="shopLogo" class="m-shop-bar__img">
      <span class="m-shop-bar__title">{{ title }}</span>
    </div>
    <div class="m-shop-bar__right">
      <div class="m-shop-bar__btn">进入店铺</div>
    </div>
  </div>
</template>

<style lang="stylus">
@import "../../style/base.styl"

.m-shop-bar
  @extend $center
  justify-content space-between
  padding 15px
  &__left
    font-weight bold
    @extend $center
  &__img
    width 40px
    height 40px
    border-radius 5px
    margin-right 10px
  &__btn
    border 1px #CBCFD6 solid
    border-radius 2px
    padding 5px 9px
    font-size 12px
</style>

<script>

export default {
  data() {
    return {
    }
  },

  props: {
    shopLogo: {
      type: String,
      default: require('../../assets/images/default-shop-avatar.png')
    },
    title: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
