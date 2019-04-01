<template>
  <div class="travel-panel">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="travel-panel__item"
      @click="onClick(i)"
    >
      <div
        class="travel-panel__icon"
        :class="{
          'travel-panel__icon-last': i === items.length - 1
        }"
      >
        <img :src="item.icon" width="100%" height="100%">
        <div class="travel-panel__tag" v-if="!hasExpense">去报销</div>
      </div>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'travel-panel',

  data() {
    return {
    }
  },

  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            name: '因私出行',
            icon: require('../../assets/images/personal.png')
          },
          {
            name: '因公出行',
            icon: require('../../assets/images/public.png')
          },
          {
            name: '我的行程',
            icon: require('../../assets/images/list.png')
          }
        ]
      }
    },
    hasExpense: Boolean
  },

  methods: {
    onClick(i) {
      // 兼容老版本
      if (i === 0) {
        this.$emit('on-personal')
      } else if (i === 1) {
        this.$emit('on-public')
      } else {
        this.$emit('on-list')
      }
      this.$emit('on-click', i)
    }
  }
}
</script>

<style lang="stylus">
  @import '../../style/base.styl'

  .travel-panel
    background-color #fff
    text-align center
    overflow hidden
    width 100%
    height px2vw(140)
    box-shadow 0 0 10px 0 rgba(0,0,0,0.10)
    border-radius 4px
    color #5C626B

  .travel-panel__item
    width 33.3333%
    float left
    height 100%

  .travel-panel__icon
    width 45px
    height 45px
    margin 5vh auto 2vh auto

    &.travel-panel__icon-last
      position relative

  .travel-panel__tag
    position absolute
    color #fff
    background-color #FFA400
    right px2vw(-30)
    top px2vw(-6)
    line-height 1
    border-radius 4px
    padding px2vw(3)
    transform scale(.7)
</style>
