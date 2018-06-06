<template>
  <common-entry title="esc应用信息">
    <p>usage</p>
    <pre>
 import esc from 'xm-mui/lib/esc'
    </pre>
    <p>获取url之前需要初始化bizType和token</p>
    <pre>
      esc.init(bizType, token)
    </pre>
    <p>然后就可以获取各种信息地址了</p>
    <pre>
  online,
  domain,
  bizType: 0,
  token: '',
  ...
  // 右键查看源码
    </pre>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import esc from '../../src/components/esc'

export default {
  name: 'cell',

  components: {
    CommonEntry
  },

  created() {
    esc.init(3, 'token')
    console.log(esc)
  }
}
</script>

<style scoped>

</style>
