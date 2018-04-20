<template>
  <common-entry title="商品卡片">
    <pre>
      import { GoodsCard } from 'xm-mui'
    </pre>
    <div class="mg--10">
      <m-goods-card
        :is-checkbox-disable="false"
        :is-show-checkbox="true"
        :is-abnormal="false"
        content-height="100"
        :price="10"
        num="100"
        spec="25盒 * 12"
        name="商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称"
        @on-click="onClick"
      >
        <!--<p slot="right">x 123</p>-->
      </m-goods-card>
    </div>
    <p>slots</p>
    <pre>
      $slots.img
      $slots.right
    </pre>
    <p>events</p>
    <pre>
      @on-check
      @on-click
    </pre>
    <p>props</p>
    <pre class="px-font-12">
    props: {
      name: {
        type: String,
        required: true
      },
      img: String,
      num: [String, Number],
      imgDefault: String,
      imgHeight: {
        type: [String, Number],
        default: 80
      },
      contentHeight: {
        type: [String, Number],
        default: 80
      },
      mainColor: {
        type: String,
        default: 'red'
      },
      isMainPriceStyle: {
        type: Boolean,
        default: true
      },
      cardBg: {
        type: String,
        default: '#ffffff'
      },
      priceFixed: {
        type: Number,
        default: 2
      },
      price: {
        type: Number,
        default: 0
      },
      isShowCheckbox: {
        type: Boolean,
        default: false
      },
      isAbnormal: {
        type: Boolean,
        default: false
      },
      abnormalImg: String,
      isCheckboxDisable: {
        type: Boolean,
        default: false
      },
      spec: String,
      isCheckboxChecked: Boolean,
      checkboxIcon: {
        type: String,
        default: 'icon-cell'
      },
      checkboxIconChecked: {
        type: String,
        default: 'icon-search'
      }
    }
    </pre>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import MGoodsCard from '../../src/components/goods-card'

export default {
  name: 'goods-card',

  components: {
    CommonEntry, MGoodsCard
  },

  methods: {
    onClick() {
      console.log(1)
    }
  }
}
</script>

<style lang="scss">

</style>
