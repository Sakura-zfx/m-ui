<template>
  <common-entry title="优惠券">
    <coupon
      :show-type="1"
      :list-data="[
        {
          bizType: 22,
          itemId: 280213,
          price: 3675,
          num: 5
        }
      ]"
      v-model="selected"
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
  }
}
</script>

<style scoped>

</style>
