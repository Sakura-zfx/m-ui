<template>
  <common-entry title="快速上手">
    <p>tips：只支持局部引用</p>
    <p class="px-margin-t20">即：安装babel-plugin-component，修改.babelrc</p>
    <p class="px-margin-t20">或：安装babel-plugin-import，修改.babelrc</p>
    <pre>
      plugins: [[
        "component" 或 "import",
        {
          "libraryName": "xm-mui",
          "style": true
        }
      ]]
    </pre>
    <p class="px-margin-t20">
      全局样式依赖<a href="https://github.com/Jmingzi/mui" target="_blank">MUI</a>，引用地址：
    </p>
    <pre>
      //statics.jituancaiyun.com/css/mui/4.0.1/mui.css
    </pre>
    <p class="px-margin-t20">
      全局iconfont，引用地址：
    </p>
    <pre>
      //at.alicdn.com/t/font_650971_p23co31pzl0daemi.css
    </pre>
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
