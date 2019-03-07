<template>
  <common-entry title="输入框">
    <m-input
      v-model="value"
      type="number"
      :fixed="0"
    />
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import MInput from '../../src/components/m-input'

export default {
  name: 'm-field',

  data() {
    return {
      value: '',
      value2: ''
    }
  },

  components: {
    CommonEntry, MInput
  }
}
</script>

<style scoped>

</style>
