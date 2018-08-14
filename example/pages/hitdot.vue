<template>
  <common-entry title="打点">
    <p>1. pd给的excel表格都是分模块给的，所以只需要对照excel，看模块编号和编号即可。</p>
    <p>2. 用法</p>
    <pre>
      // 第一步
      import dot from 'xm-mui/lib/hit-dot'

      // 第二步

      // 简单写法
      dot.initDot(modulesId)

      // 复杂写法
      dot.initDot({
        moduleId: 0,
        eventId: 0,
        orgId: undefined,
        userId: undefined,
        platform: isIOS ? 'iOS' : 'android'
      })

      // 第三步
      dot.hitDot(101) // 事件编号
    </pre>
    <p>3. 根据excel生成的js文件的脚本地址为 <a href="https://statics.e.uban360.com/pages/xlsx2json/index.html?a=1" target="_blank">https://statics.e.uban360.com/pages/xlsx2json</a></p>
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
