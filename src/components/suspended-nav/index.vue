<template>
  <div
    class="suspended-nav"
    :style="{
      bottom: `${isSpread ? 120 : 130}px`
    }"
  >
    <div v-if="!isSpread" class="suspended-nav__pack" @click="isSpread = true">
      <img :src="packBg" width="100%">
    </div>
    <div v-else class="suspended-nav__spread">
      <div class="suspended-nav__spread--btn" @click="isSpread = false">
        <img :src="spreadIcon">
        <span>收起</span>
      </div>
      <div
        v-for="item in navList"
        :key="item.id"
        class="suspended-nav__item"
        @click="toIcon(item)"
      >
        <i :class="`iconfont ${item.icon}`" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import handle from '@xm/cart-redirect'
export default {
  name: 'suspended-nav',

  data() {
    return {
      isSpread: false,

      packBg: 'https://global.uban360.com/sfs/file?digest=fid24968acd1fb4d6b9ee9dd61f281d88fa&fileType=2',
      spreadIcon: 'https://global.uban360.com/sfs/file?digest=fidcc7c2b1d670a681342666424f2d48560&fileType=2',
      navList: [{
        name: '首页',
        icon: 'icon-shouye2',
        path: '/',
        id: 2
      },
      {
        name: '搜索',
        icon: 'icon-sousuo1',
        path: '/search',
        id: 4
      },
      {
        name: '购物车',
        icon: 'icon-gouwuche1',
        path: '/cart',
        id: 1
      },
      {
        name: '个人',
        icon: 'icon-geren',
        path: '/user-center',
        id: 3
      }]
    }
  },

  props: {
    redirect: {
      type: Function,
      required: true
    },
    // 自定义的路由跳转
    // 例如商城
    customRedirect: {
      type: Function
    }
  },

  methods: {
    toIcon(item) {
      const searchId = this.navList[1].id
      if (item.id === searchId) {
        // 搜索不跟打标走，而是应用自己的
        if (this.customRedirect) {
          this.customRedirect(searchId)
        } else {
          this.$router.push(item.path)
        }
      } else {
        const handle = this.customRedirect instanceof Function
          ? this.customRedirect.bind(this, item.id)
          : this
        this.redirect(this.$native.openUrl.bind(this.$native), handle, item.id)
      }
    }
  }
}
</script>

<style lang="stylus">
.suspended-nav
  position fixed
  bottom 130px
  right 10px
  z-index 999
  &__pack
    width 40px
    height 40px
  &__spread
    display flex
    width 220px
    height 60px
    background-color #fff
    box-shadow: 0 0 4px 0 #CBCFD6
    border-radius: 2px
    &>div
      display flex
      justify-content center
      align-items center
      flex-direction column
      span
        font-size 12px
    &--btn
      width 40px
      height inherit
      background-color #F7F8F9
      img
        width 15px
        padding-top 3px
  &__item
    width 60px
    i
      color: #5C626B
      font-size 18px
</style>
