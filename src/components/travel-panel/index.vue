<template>
  <div class="travel-panel">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="travel-panel__item"
      :class="{
        [`travel-panel__item-w${items.length}`]: true
      }"
      @click="onClick(item, i)"
    >
      <div
        class="travel-panel__icon"
        :class="{
          'travel-panel__icon-last': i === items.length - 1
        }"
      >
        <img :src="item.icon" width="100%" height="100%">
        <div class="travel-panel__tag" v-if="hasExpense && expenseId === item.id">去报销</div>
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
            id: 1,
            name: '因私出行',
            icon: require('../../assets/images/personal.png')
          },
          {
            id: 2,
            name: '因公出行',
            icon: require('../../assets/images/public.png')
          },
          {
            id: 3,
            name: '我的行程',
            icon: require('../../assets/images/list.png')
          }
        ]
      }
    },
    hasExpense: Boolean,
    expenseId: Number
  },

  methods: {
    onClick(item, i) {
      // 兼容老版本
      if (i === 0) {
        this.$emit('on-personal')
      } else if (i === 1) {
        this.$emit('on-public')
      } else {
        this.$emit('on-list')
      }
      this.$emit('on-click', item)
    }
  }
}
</script>

<style lang="stylus">
  @import '../../style/base.styl'

  .travel-panel
    display flex
    background-color #fff
    text-align center
    // overflow hidden
    width 100%
    height px2vw(140)
    box-shadow 0 0 10px 0 rgba(0,0,0,0.10)
    border-radius 4px
    color #5C626B

  .travel-panel__item
    height 100%
    &-w3
      width 33.3333%
    &-w4
      width 25%

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
