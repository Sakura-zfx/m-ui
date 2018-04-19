<template>
  <common-entry title="开关单元格">
    <p>有赞开关单元格</p>
    <pre>
      import { SwitchCell } from 'vant'
      Vue.use(SwitchCell)
    </pre>
    <p><a href="https://www.youzanyun.com/zanui/vant#/zh-CN/SwitchCell" target="_blank">戳我查看文档</a></p>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'

export default {
  name: 'cell',

  components: {
    CommonEntry
  }
}
</script>

<style scoped>

</style>
