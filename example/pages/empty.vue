<template>
  <common-entry title="空页面">
    <pre>
      import { Empty } from 'xm-mui'
    </pre>
    <m-empty
      icon="icon-cell"
      btn-text="新建按钮"
    />
    <p>events</p>
    <pre>
      @on-click
    </pre>
    <p>usage</p>
    <pre>
      &lt;m-empty
        icon="icon-cell"
        btn-text="新建按钮"
      /&gt;
    </pre>
    <p>props</p>
    <pre>
      props: {
        title: {
          type: String,
          default: '没有数据哦～'
        },
        desc: {
          type: String,
          default: ''
        },
        btnText: {
          type: String,
          default: ''
        },
        iconImg: {
          type: String,
          default: ''
        },
        icon: {
          type: String,
          default: ''
        }
      }
    </pre>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import MEmpty from '../../src/components/empty'

export default {
  name: 'empty',

  components: {
    CommonEntry, MEmpty
  }
}
</script>

<style scoped>

</style>
