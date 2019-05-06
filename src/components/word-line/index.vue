<template>
  <div class="word-line">
    <span
      class="word-line__left"
      :style="{ width: `${lineWidth/3.75}vw` }"
    />
    <slot />
    <span
      class="word-line__right"
      :style="{ width: `${lineWidth/3.75}vw` }"
    />
  </div>
</template>

<script>
export default {
  name: 'word-line',

  props: {
    lineWidth: {
      type: Number,
      default: 66
    }
  }
}
</script>

<style lang="scss">
  .word-line {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #5C626B;

    &__left,
    &__right {
      display: block;
      height: 1px;
      background-color: #F2F2F2;
      margin: 0 10px;
    }
  }
</style>
