<template>
  <div class="coupon-select">
    <div class="coupon-select__item" @click="toggle()">
      <slot
        :item="selected"
        :no-usable="noUsable"
        :no-use="noUse"
      />
    </div>

    <popup
      :visible.sync="showPanel"
      :show-btn="false"
      :no-title="!isOnlyUsable"
      :content-height="370"
      title="可用优惠券"
    >
      <div class="coupon-select__area">
        <div v-if="!isOnlyUsable" class="coupon-select__tab">
          <tab
            :tabs="['可用优惠券', '不可用优惠券']"
            :tab-line-width="80"
            :active-tab="activeTab"
            @callback="handleChangeTab"
            item-cls="coupon-select__tab--item"
            main-color="#FF4D4D"
          />
          <div class="coupon-select__tab--close" @click="toggle(false)">
            <i class="iconfont icon-guanbi" />
          </div>
        </div>

        <div
          v-if="list && list.length"
          class="coupon-select__area--pd"
          :class="{
            'coupon-select__area--list': !isOnlyUsable
          }"
          :style="{
            height: activeTab === 1 ? '320px' : undefined
          }"
        >
          <item
            v-for="item in list"
            :key="item.id"
            :detail="item"
            :can-choose="activeTab === 0 && !isOnlyUsable"
            :is-expire="activeTab === 1"
            :is-selected="selected && selected.id === item.id"
            @on-click="handleSelect"
            @on-gather="url => toGather(url)"
          />
        </div>
        <p v-else-if="list && !list.length" style="text-align: center; color: #666; padding-top: 100px">
          暂无{{ activeTab === 0 ? '' : '不' }}可用优惠券~
        </p>

        <div
          v-if="!isOnlyUsable && activeTab === 0"
          class="coupon-select__btn"
          @click="notUse"
        >
          不使用优惠券
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import Popup from '../popup'
import Tab from '../tab'
import Http from '../http'
import Item from './coupon-item'

const online = location.protocol === 'https:'
const http = new Http({
  uri: {
    goodsCoupon: '/welfare/welfare/couponsForItem',
    orderCoupon: '/welfare/welfare/conponsForOrder'
  },
  baseURL: online ? '' : 'http://app.e.uban360.net',
  contentType: 'application/json'
})

export default {
  data () {
    return {
      showPanel: false,
      activeTab: 0,
      selected: this.value,
      list: null,
      noUsable: false, // 没有可用优惠券
      noUse: false // 不使用优惠券
      // cacheCouponList: null
    }
  },

  components: {
    Popup,
    Tab,
    Item
  },

  props: {
    value: Object,
    showType: {
      type: Number,
      default: 1 // 1 只能查看可用优惠券；2 能切换选择可用与不可用
    },
    listData: [Object, Array],
    toGather: Function
  },

  model: {
    event: 'change'
  },

  computed: {
    isOnlyUsable () {
      return this.showType === 1
    }
  },

  watch: {
    showPanel(val) {
      if (val) {
        this.getList()
      }
    }
  },

  created () {
    this.getList()
  },

  methods: {
    getList () {
      const isUsable = this.activeTab === 0
      // if (this.cacheCouponList && !this.isOnlyUsable) {
      //   const { validCoupons, unValidCoupons } = this.cacheCouponList
      //   this.list = (isUsable ? validCoupons : unValidCoupons) || []
      //   return Promise.resolve()
      // }

      const handle = this.isOnlyUsable
        ? http.get('goodsCoupon', this.listData[0])
        : http.post('orderCoupon', this.listData)
      handle.then(res => {
        if (res.value) {
          if (this.isOnlyUsable) {
            const data = res.value || []
            // 抵扣金额 从小到大
            // 满足金额 从小到大
            const sortData = data.slice()
              .sort((a, b) => a.full - b.full)
              .sort((a, b) => a.reduction - b.reduction)
            this.list = sortData
            this.selected = sortData[0]
            this.selected.couponListName = sortData.map(x =>
              `满${(x.full / 100)}减${(x.reduction / 100)}`
            ).join(';')
          } else {
            const { validCoupons, unValidCoupons, bestCoupon } = res.value
            // this.cacheCouponList = { validCoupons, unValidCoupons }
            this.list = (isUsable ? validCoupons : unValidCoupons) || []
            if (
              !this.selected ||
              !bestCoupon ||
              !validCoupons ||
              !validCoupons.length ||
              validCoupons.every(x => x.id !== this.selected.id)
            ) {
              this.selected = bestCoupon
            }
          }
          this.noUsable = !this.selected
          this.noticeOut()
        }
      }).catch(err => {
        console.log(err)
      })
    },

    toggle (type = true) {
      this.showPanel = type
      if (type === false) {
        this.activeTab = 0
        // this.list = null
        // this.cacheCouponList = null
      } else if (this.noUsable) {
        this.activeTab = 1
      }
    },

    handleChangeTab (tab) {
      if (tab !== this.activeTab) {
        this.activeTab = tab
        this.list = null
        this.getList()
      }
    },

    noticeOut () {
      this.$emit('change', this.selected)
    },

    notUse () {
      this.noUse = true
      this.selected = null
      this.noticeOut()
      this.toggle(false)
    },

    handleSelect (item) {
      this.noUse = false
      this.selected = item
      this.noticeOut()
      this.toggle(false)
    }
  }
}
</script>

<style lang="stylus">
  .coupon-select
    &__tab
      position relative
      height 45px
      border-bottom 1px #eee solid
      &--item
        line-height 44px
        color #4A4A4A
      &--close
        position absolute
        right 0
        top 0
        display flex
        align-items center
        height 100%
        color #999
        padding 0 15px
        i
          font-size 12px
    &__area
      height 100%
      &--pd
        padding 15px 4vw
      &--list
        height 370px - 45px - 54px
        overflow auto
        -webkit-overflow-scrolling touch
    &__btn
      position absolute
      width 100%
      line-height 54px
      bottom 0
      left 0
      text-align center
      box-shadow: 0 -2px 4px 0 #E9ECF0
      font-size: 16px
</style>
