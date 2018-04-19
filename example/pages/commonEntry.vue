<template>
  <div class="common-entry">
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="common-style">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-entry',

  props: {
    title: {
      type: String
    }
  },

  methods: {
    onClickLeft() {
      history.back()
    }
  }
}
</script>

<style lang="scss" scoped>
  .common-style {
    padding: 10px;
    background-color: #fff;

    p, div, span {
      font-size: 14px;
      color: #666;
    }

    pre {
      background-color: #f7f7f7;
      padding-top: 1em;
      color: #666;
      font-size: 12px;
    }
  }

  .mg--10 {
    margin: -10px;
  }
</style>
