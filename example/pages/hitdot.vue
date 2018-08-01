<template>
  <common-entry title="打点">
    <p>1. 根据pd给定的excel文件生成js文件放到一个可访问的服务器中</p>
    <pre>
      企业服务都是放在Ub-Web/statics-uban CDN中
      规则是：/js/hit-dot/日期/index.版本.js
    </pre>
    <p>2. 根据excel生成的js文件的脚本地址为 <a href="https://statics.e.uban360.com/pages/xlsx2json/index.html" target="_blank">https://statics.e.uban360.com/pages/xlsx2json</a></p>
    <p>3. 生成的格式如下</p>
    <pre>
      [
        {
          编号: "102",
          用户操作: "点击差旅报销",
          事件id: "businesstrip_businesstrip_homepage_reimbursement_click",
          事件名称: "点击差旅报销"
        }
        ...
      ]
    </pre>
    <p>4. 用法</p>
    <pre>
      // 第一步
      import dot from 'esc/lib/hit-dot'

      // 第二步
      dot.initDot({
        filePath: 'https://staitcs.e.uban360.com/js/hit-dot/0730/index.1.js',
        dotCollectionName: 'HIT_DOT_1',
        keyId: '事件id',
        keyNumber: '编号',
        keyName: '事件名称'
      })

      // 第三步
      dot.hitDot(101) // 编号
    </pre>
    <p>5. 如果有多个文件，filePath以数组传递，dotCollectionName也是。</p>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import MCell from '../../src/components/cell'

export default {
  name: 'cell',

  components: {
    CommonEntry, MCell
  }
}
</script>

<style scoped>

</style>
