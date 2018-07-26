<template>
  <div class="msgbox-style" v-if="show">
    <div class="msgbox-style__content">
      <i
        v-if="hasClose"
        class="iconfont icon-guanbi msgbox-style__icon"
        @click="close"
      />
      <div class="msgbox-style__img">
        <template v-if="$slots.img" />
        <img
          :src="type | getImg"
          width="100%"
          height="100%"
          v-else
        >
      </div>
      <p class="msgbox-style__title">{{ title }}</p>
      <p class="msgbox-style__desc">{{ desc }}</p>
      <div class="msgbox-style__btns" v-if="cancelText || confirmText">
        <div
          v-if="cancelText"
          class="msgbox-style__btn"
          :style="{
            borderColor: mainColor,
            color: mainColor
          }"
          @click="onCancel"
        >
          {{ cancelText }}
        </div>
        <div
          v-if="confirmText"
          class="msgbox-style__btn msgbox-style__btn-ok"
          :style="{
            borderColor: mainColor,
            backgroundColor: mainColor,
            color: '#fff'
          }"
          @click="onConfirm"
        >
          {{ confirmText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const imgMap = {
  'doing': require('./custom-alert-2.png'),
  'error': require('./custom-alert-1.png')
}

export default {
  filters: {
    getImg(type) {
      return imgMap[type] ? imgMap[type] : ''
    }
  },

  props: {
    show: Boolean,
    type: {
      type: String,
      default: 'doing'
    },
    title: {
      type: String,
      default: '这是标题'
    },
    desc: {
      type: String,
      default: ''
    },
    mainColor: {
      type: String,
      default: '#4D5CF0'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    hasClose: Boolean
  },

  methods: {
    onCancel() {
      this.close()
      this.$emit('on-cancel')
    },
    onConfirm() {
      this.close()
      this.$emit('on-confirm')
    },
    close() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="stylus">
  .msgbox-style
    position fixed
    width 100%
    top 0
    left 0
    bottom 0
    background-color rgba(0,0,0, .7)
    z-index 9999

    &__content
      position absolute
      background-color #ffffff
      padding 20px
      transform translate(-50%, -50%)
      left 50%
      top 50%
      width 85vw
      box-shadow 0 0 4px 0 rgba(0,0,0,0.50)
      border-radius 4px
      text-align center

    &__title
      font-size 20px
      margin 30px 0 0 0

    &__img
      margin 20px auto 0 auto
      width 60px
      height 60px

    &__desc
      font-size 16px
      color #959BA3
      margin 10px

    &__btns
      text-align center
      padding 20px 0 10px 0
      display flex
      justify-content center

    &__btn
      width 34.7vw
      height 40px
      text-align center
      border 1px transparent solid
      border-radius 2px
      font-size 4.27vw
      line-height 38px

      &-ok
        margin-left 2.7vw

    &__icon
      position absolute
      right 20px
      top 20px
      color: #999
</style>
