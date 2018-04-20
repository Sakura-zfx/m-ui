<template>
  <common-entry title="输入框">
    <p>有赞输入框</p>
    <pre>
      import { Field } from 'vant'
      Vue.use(Field)
    </pre>
    <van-cell-group>
      <field
        v-model="value"
        label="number"
        type="number"
        placeholder="请输入"
      />
      <field
        v-model="value2"
        label="tel"
        type="tel"
        placeholder="请输入"
      />
    </van-cell-group>
    <p><a href="https://www.youzanyun.com/zanui/vant#/zh-CN/field" target="_blank">戳我查看文档</a></p>
  </common-entry>
</template>

<script>
import { Field } from 'vant'
import CommonEntry from './commonEntry'

export default {
  name: 'm-field',

  data() {
    return {
      value: '',
      value2: ''
    }
  },

  components: {
    CommonEntry, Field
  }
}
</script>

<style scoped>

</style>
