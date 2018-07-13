<template>
  <common-entry title="msgbox">
    <message />
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import message from '../../src/components/message/index'

export default {
  name: 'msg-box',

  components: {
    CommonEntry,
    message
  },

  methods: {
  }
}
</script>

<style scoped>

</style>
