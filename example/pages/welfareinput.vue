<template>
  <common-entry title="积分输入">
    <div class="mg--10">
      <welfare-input
        :rest-amount-welfare="1000"
        :rest-amount-caidou="1000"
        :is-open-welfare="openWelfare"
        :is-open-caidou="openCaidou"
        :pay-way-id="3"
        @welfare-num-change="changeNum"
        @change-open-welfare="val => openWelfare = val"
        @change-open-caidou="val => openCaidou = val"
        @change-open-welfare-error="changeError"
      />
    </div>

    <p>props</p>
    <pre>
      {
        mainColor: String,
        // 可用积分数量
        restAmountWelfare: Number,
        // 可用彩豆数量
        restAmountCaidou: Number,
        // 是否使用积分
        isOpenWelfare: Boolean,
        // 是否使用彩豆
        isOpenCaidou: Boolean,
        // 支付方式Id
        payWayId: Number,
        // 最大彩豆数量
        caidouMaxUseNum: Number,
        // 最大积分数量
        welfareMaxUseNum: Number
      }
    </pre>
    <p>events</p>
    <pre>
      @welfare-num-change
      @caidou-num-change
      @change-open-welfare
      @change-open-caidou
    </pre>
    <p>methods</p>
    <pre>
      // 重置数量为最大
      $refs.module.setNum()
      // 重置数量为0
      $refs.module.resetNum()
      // 获取data
      $refs.module.getData()
    </pre>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import WelfareInput from '../../src/components/welfare-input/index'

export default {
  name: 'm-welfare-input',

  data() {
    return {
      openWelfare: false,
      openCaidou: true
    }
  },

  components: {
    CommonEntry,
    WelfareInput
  },

  methods: {
    changeNum(val) {
      console.log(val)
    },
    changeError() {
      alert('changeError')
    }
  }
}
</script>

<style scoped>

</style>
