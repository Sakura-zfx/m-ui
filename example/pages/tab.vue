<template>
  <common-entry title="tab">
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

    <m-tab
      color="blue"
      :active-tab="active"
      :tabs="['我发起的', '我收到的', '指挥我的']"
      :disable-tab="[1]"
      :tab-line-width="30"
      @callback="tabCallback"
    />
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
