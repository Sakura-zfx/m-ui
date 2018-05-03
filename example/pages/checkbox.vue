<template>
  <common-entry title="复选框">
    <m-checkbox
      v-model="check"
      label="复选框"
      check-type="2"
      @change="boxChange"
    />
    <pre>
      import { checkbox } from 'xm-mui'
    </pre>
    <p>支持传选择框类型，即</p>
    <pre>
      checkType 1 // 复选框 // 2 单选框
    </pre>
    <p>props</p>
    <pre>
      props: {
        value: Boolean,
        label: String,
        mainColor: {
          type: String,
          default: 'red'
        },
        size: {
          type: Number,
          default: 16
        },
        checkIcon: {
          type: String,
          default: 'icon-duoxuankexuan'
        },
        checkedIcon: {
          type: String,
          default: 'icon-duoxuanxuanzhong'
        },
        checkType: {
          type: [Number, String],
          default: 1 // 复选框 // 2 单选框
        },
        disabled: Boolean
      },
    </pre>
    <p>events</p>
    <pre>
      @change="boxChange"
    </pre>
    <p>用法</p>
    <pre>
      &lt;m-checkbox
        v-model="check"
        label="复选框"
        @change="boxChange"
        check-icon="icon-cell"
        checked-icon="icon-search"
      /&gt;
    </pre>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import MCheckbox from '../../src/components/checkbox'

export default {
  name: 'checkbox',

  components: {
    CommonEntry, MCheckbox
  },

  data() {
    return {
      check: false
    }
  },

  created() {
    // this.$loading.open()
    // setTimeout(this.$loading.close, 2000)
  },

  methods: {
    boxChange(status) {
      console.log(status)
    }
  }
}
</script>

<style scoped>
</style>
