<template>
  <common-entry title="优惠券">
    <coupon
      :show-type="2"
      :list-data="[
        {
          bizType: 139,
          itemId: 294,
          price: 50,
          num: 1
        }
      ]"
      v-model="selected"
      :to-gather="gather"
    >
      <div class="coupon-default-item" slot-scope="{ item, noUsable }">
        已选择：{{ item }}，是否有优惠券：{{ noUsable ? '没有' : '有' }}
      </div>
    </coupon>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import Coupon from '../../src/components/coupon'

export default {
  name: 't-coupon',

  data() {
    return {
      selected: null
    }
  },

  components: {
    CommonEntry, Coupon
  },

  methods: {
    gather(url) {
      console.log(url)
    }
  }
}
</script>

<style scoped>

</style>
