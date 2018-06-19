<template>
  <common-entry title="意见反馈">
    <m-feedback v-model="input" @on-btn="submit"/>
    <p>props</p>
    <pre>
  props: {
    placeholder: {
      type: String,
      default: '请输入'
    },
    btnText: {
      type: String,
      default: '提交'
    },
    mainColor: {
      type: String,
      default: 'red'
    },
    value: String
  }
    </pre>
    <p>events</p>
    <pre>
      $emit('on-btn', content)
    </pre>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import MFeedback from '../../src/components/feedback'

export default {
  name: 'cell',

  components: {
    CommonEntry, MFeedback
  },

  data() {
    return {
      input: '1'
    }
  },

  methods: {
    submit(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>
