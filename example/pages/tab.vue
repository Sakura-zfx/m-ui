<template>
  <common-entry title="tab">
    <pre>
      import { Tab } from 'xm-mui'
    </pre>
    <m-tab
      color="blue"
      :active-tab="active"
      :tabs="['我发起的', '我收到的', '指挥我的']"
      :disable-tab="[1]"
      :tab-line-width="30"
      @callback="tabCallback"
    />

    <p>用法</p>
    <pre>
      &lt;tab
        color="blue"
        :active-tab="active"
        :tabs="['我发起的', '我收到的', '指挥我的']"
        :disable-tab="[1]"
        :tab-line-width="30"
        @callback="tabCallback"
      /&gt;
    </pre>

    <p>events</p>
    <pre>
      @callback="tabCallback"
    </pre>

    <p>props</p>
    <pre>
      props: {
        tabs: {
          type: Array,
          default: function () {
            return []
          }
        },
        itemCls: {
          type: String,
          default: ''
        },
        activeTab: {
          type: Number,
          default: 0
        },
        color: {
          type: String,
          default: '#fa565a'
        },
        tabLineWidth: {
          type: Number,
          default: 60
        },
        noTabLine: {
          type: Boolean,
          default: false
        },
        disableTab: {
          type: Array,
          default() {
            return []
          }
        }
      }
    </pre>
  </common-entry>
</template>

<script>
import MTab from '../../src/components/tab'
import CommonEntry from './commonEntry'

export default {
  name: 'tab',

  components: {
    MTab, CommonEntry
  },

  data() {
    return {
      active: 1
    }
  },

  methods: {
    tabCallback(index) {
      this.active = index
      console.log(index)
    }
  }
}
</script>

<style scoped>

</style>
