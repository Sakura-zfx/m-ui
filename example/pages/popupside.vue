<template>
  <common-entry title="侧边popup">
    <p @click="visible = true">打开显示</p>
    <popup-side
      align="left"
      :visible="visible"
      @toggle="visible = !visible"
    />
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import PopupSide from '../../src/components/popup-side'

export default {
  name: 'cell',

  components: {
    CommonEntry,
    PopupSide
  },

  data() {
    return {
      visible: false
    }
  }
}
</script>

<style scoped>

</style>
