<template>
  <div
    v-show="visible || show"
    class="m-mask__wrap position-f left-0 top-0 bottom-0 width-100"
    @click="$emit('tap')"
    @touchmove.prevent="">
    <div class="width-100 height-100" @touchmove.stop="">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-mask',
  data() {
    return {
      visible: false
    }
  },
  props: {
    show: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  }
}
</script>

<style>
  .m-mask__wrap {
    background-color: rgba(0,0,0,.59);
    z-index: 1001;
    transition: opacity .2s;
  }
</style>
