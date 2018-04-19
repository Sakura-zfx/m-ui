<template>
  <common-entry title="复选框">
    <m-checkbox
      v-model="check"
      label="复选框"
      @change="boxChange"
      check-icon="icon-cell"
      checked-icon="icon-search"
    />

    <pre>
      &lt;m-checkbox
        v-model="check"
        label="复选框"
        @change="boxChange"
        check-icon="icon-cell"
        checked-icon="icon-search"
      /&gt;
    </pre>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import MCheckbox from '../../src/components/checkbox'

export default {
  name: 'checkbox',

  components: {
    CommonEntry, MCheckbox
  },

  data() {
    return {
      check: false
    }
  },

  methods: {
    boxChange(status) {
      console.log(status)
    }
  }
}
</script>

<style scoped>

</style>
