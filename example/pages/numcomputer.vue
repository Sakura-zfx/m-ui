<template>
  <common-entry title="popup">
    <m-alter-num
      v-model="value"
      :min="1"
      :max="20"
      input-wait="400"
      @on-change="numChangeCallback"
      @invalid="callback"
    />
    <pre>
      import { NumComputer } from 'xm-mui'
    </pre>
    <pre>
      &lt;m-alter-num
        v-model="value"
        :min="1"
        :max="20"
        input-wait="400"
        @on-change="numChangeCallback"
        @invalid="callback"
      /&gt;

      numChangeCallback(num, oldNum) {
        console.log(`this.value: ${this.value} new: ${num}, old: ${oldNum}`)
      }
    </pre>
  </common-entry>
</template>

<script>
import MAlterNum from '../../src/components/num-computer'
import CommonEntry from './commonEntry'

export default {
  name: 'alter-num',

  components: {
    MAlterNum, CommonEntry
  },

  data() {
    return {
      value: 11
    }
  },

  methods: {
    numChangeCallback(num, oldNum) {
      console.log(`this.value: ${this.value} new: ${num}, old: ${oldNum}`)
    },

    callback(num) {
      console.log(num)
    }
  }
}
</script>

<style scoped>

</style>
