<template>
  <common-entry class="pd-0" title="店铺栏">
    <shop title="京东自营哦" />
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import Shop from '../../src/components/shop-bar'

export default {
  name: 'cell',

  components: {
    CommonEntry, Shop
  }
}
</script>

<style>
  .pd-0 .common-style {
    padding: 0!important;
  }
</style>
