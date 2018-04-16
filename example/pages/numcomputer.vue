<template>
  <common-entry title="popup">
    <m-alter-num
      :val="11"
      :min="1"
      :max="20"
      @num-change-callback="numChangeCallback"
    />

    <pre>
      &lt;alter-num
        :val="11"
        :min="1"
        :max="20"
        @num-change-callback="numChangeCallback"
      /&gt;
    </pre>
  </common-entry>
</template>

<script>
import MAlterNum from '../../src/components/numcomputer'
import CommonEntry from './commonEntry'

export default {
  name: 'alter-num',

  components: {
    MAlterNum, CommonEntry
  },

  methods: {
    numChangeCallback(num) {
      console.log(num)
    }
  }
}
</script>

<style scoped>

</style>
