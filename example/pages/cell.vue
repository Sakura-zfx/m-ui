<template>
  <common-entry title="单元格">
    <p>有赞单元格</p>
    <pre>
      import { Cell, CellGroup } from 'vant'
      Vue.use(Cell).use(CellGroup)
    </pre>
    <p><a href="https://www.youzanyun.com/zanui/vant#/zh-CN/cell" target="_blank">戳我查看文档</a></p>
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
