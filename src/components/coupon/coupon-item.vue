<template>
  <div
    class="coupon-select-item"
    :class="{
      'coupon-select-item__expire': isExpire
    }"
    @click="handle"
  >
    <div class="coupon-select-item__wrap">
      <div class="coupon-select-item__left">
        <div class="coupon-select-item__left--price">
          <span>¥</span>{{ detail.reduction | lFixed }}
        </div>
        <span>满{{ detail.full | lFixed }}可用</span>
      </div>
      <div class="coupon-select-item__right">
        <div class="coupon-select-item__right--title">{{ detail.name }}</div>
        <div class="coupon-select-item__right--time">
          {{ detail.startTime | fTime }} - {{ detail.endTime | fTime }}
        </div>
      </div>
    </div>
    <div
      class="coupon-select-item__cd"
      v-if="isExpire && detail.redirectUrl"
      @click="toCd"
    >
      去凑单
    </div>
    <div class="coupon-select-item__reason" v-if="isExpire && detail.reason" v-html="detail.reason"/>
    <div class="coupon-select-item__icon" v-if="canChoose">
      <img :src="isSelected ? iconChoose : iconEmpty" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
export default {
  name: 'coupon-item',

  data () {
    return {
      iconEmpty: 'https://global.uban360.com/sfs/file?digest=fid13b8da356501919608f6bd0d808fb8a1&fileType=2',
      iconChoose: 'https://global.uban360.com/sfs/file?digest=fidcbb7ff4c23979afb8446c3b35ffdfeab&fileType=2'
    }
  },

  props: {
    isExpire: Boolean,
    detail: Object,
    isSelected: Boolean,
    canChoose: Boolean
  },

  filters: {
    lFixed(num) {
      return (num / 100)
    },

    fTime (str) {
      return str.split(' ')[0].replace(/-/g, '.')
    }
  },

  methods: {
    handle () {
      if (this.canChoose) {
        this.$emit('on-click', this.detail)
      }
    },

    toCd () {
      // this.$parent.$parent.$emit('on-gather', this.detail.redirectUrl)
      // this.$emit('on-gather', this.detail.redirectUrl)
      this.$router.replace('/cart')
      this.$native.openUrl(this.detail.redirectUrl)
    }
  }
}
</script>

<style lang="stylus">
  $red = #FF4000
  .coupon-select-item
    position relative
    margin-bottom 10px
    &__expire
      & ^[0]__left
        background-color #CBCFD6
    &__wrap
      position relative
      z-index 1
      display flex
      box-shadow: 0 0 4px 0 #E9ECF0
      border-radius 8px
      height 80px
      overflow: hidden
      background-color #fff
    &__left
      display flex
      flex-direction column
      justify-content center
      align-items center
      flex 0 0 24vw
      width 24vw
      height 100%
      background-color $red
      color #fff
      span
        font-size 12px
      &--price
        font-size 32px
        line-height 1
    &__right
      display flex
      flex-direction column
      justify-content center
      flex 0 0 68vw
      width 68vw
      height 100%
      color #262A30
      padding-left 10px
      &--title
        font-size 16px
        margin-bottom 15px
        white-space nowrap
        text-overflow ellipsis
        overflow: hidden
      &--time
        font-size 12px
    &__reason
      position relative
      z-index 0
      padding 18px 10px 10px
      border-radius 0 0 8px 8px
      font-size 10px
      color #5C626B
      box-shadow: 0 0 4px 0 #E9ECF0
      margin-top -8px
    &__icon
      position absolute
      width 18px
      height 18px
      right 15px
      top 31px
      z-index 1
    &__cd
      position absolute
      right 10px
      top 40px
      // transform translateY(-50%)
      border 1px $red solid
      border-radius 3px
      padding 1px 5px
      font-size 12px
      color $red
      background-color #fff
      z-index 1
</style>
