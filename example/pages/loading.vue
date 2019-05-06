<template>
  <common-entry title="加载器">
    <pre>
      import { Loading } from 'xm-mui'
      Vue.use(Loading)
    </pre>

    <p>打开后，2s后手动关闭</p>
    <pre>
      this.$loading.open()
      setTimeout(this.$loading.close, 2000)
    </pre>

    <div>
      <a href="javascript:;" @click="$loading.open">打开loading</a>
    </div>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'

export default {
  name: 'loading',

  components: {
    CommonEntry
  },

  created() {
    this.$loading.open('加载中...')
    setTimeout(this.$loading.close, 2000)
  }
}
</script>

<style scoped>

</style>
