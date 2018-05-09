<template>
  <div
    class="warning px-padding-tb5"
    v-show="showWarning"
  >
    <div class="px-padding-5 fl px-width-30 text-center" v-if="ball">
      <i class="iconfont icon-tixing font-12" />
    </div>
    <div class="px-padding-5 fr px-width-30 text-center" @click="close">
      <i class="iconfont icon-guanbi font-10" />
    </div>
    <p
      class="px-font-12 overflow-h"
      :class="{
        'px-padding-l10': !ball
      }"
      @click="$emit('on-click')"
    >
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'warn-message',
  data() {
    return {
      showWarning: true
    }
  },
  methods: {
    close() {
      this.showWarning = false
      this.$emit('on-close')
    }
  },
  props: {
    message: {
      type: String,
      default: '这是一段提示'
    },
    ball: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
  .warning {
    background-color: #FEFBE5;
    color: #FE6A00;
  }
</style>
