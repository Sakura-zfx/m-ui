<template>
  <common-entry title="msgbox">
    <div style="text-align:center">
      <p>
        <a href="javascript:" @click="msgBoxAlert">alert弹窗</a>
      </p>
      <p>
        <a href="javascript:" @click="msgBoxConfirm">confirm弹窗</a>
      </p>
    </div>
    <p>代码示例</p>
    <pre>
      msgBox.alert(1)
      msgBox.confirm(2)
    </pre>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import msgBox from '../../src/components/msgbox/index'

export default {
  name: 'msg-box',

  components: {
    CommonEntry
  },

  methods: {
    msgBoxAlert() {
      msgBox.alert(1)
    },

    msgBoxConfirm() {
      msgBox.confirm(2)
    }
  }
}
</script>

<style scoped>

</style>
