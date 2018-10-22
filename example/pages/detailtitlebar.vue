<template>
  <common-entry class="pd-0" title="商品详情标题栏">
    <!--<p>34345345</p>-->
    <m-title
      type="gj"
      old-price="1212344"
      :price="232323"
      title="牛逼的哈哈哈"
      label="京东自营"
      brand="meiko"
    >
      <span>好评率：1212</span>
    </m-title>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import MTitle from '../../src/components/detail-title-bar'

export default {
  name: 'cell',

  components: {
    CommonEntry, MTitle
  }
}
</script>

<style>
  .pd-0 .common-style {
    padding: 0!important;
  }
</style>
