<template>
  <m-mask
    :show="visible"
    :style="{
      textAlign: this.align
    }"
    @tap="hide"
  >
    <transition :name="`fade-${this.align}`">
      <div
        v-if="visible && localVar"
        class="m-popup-side display-ib height-100 bg-fff overflow-h"
        @click.stop=""
      >
        <div
          class="m-popup-side__content height-100 no-wrap font-0"
          :style="{
            transform: `translateX(${currentIndex * -50}%)`,
            '-webkit-transform': `-webkit-translateX(${currentIndex * -50}%)`
          }"
        >
          <div class="ib-middle width-50 height-100 px-font-14 overflow-a touch-scroll">
            <slot />
          </div>
          <div class="ib-middle width-50 height-100 px-font-14 overflow-a touch-scroll">
            <slot name="right" />
          </div>
        </div>
      </div>
    </transition>
  </m-mask>
</template>

<script>
import Mask from '../mask/mask.vue'

export default {
  name: 'popup-side',

  components: {
    MMask: Mask
  },

  props: {
    align: {
      type: String,
      default: 'right'
    },
    visible: Boolean
  },

  data() {
    return {
      localVar: false,
      currentIndex: 0
    }
  },

  watch: {
    visible(val) {
      this.localVar = val
    }
  },

  created() {
    this.localVar = this.visible
  },

  methods: {
    hide() {
      this.localVar = false
      setTimeout(() => {
        this.$emit('toggle')
      }, 200)
    },

    next(num) {
      this.currentIndex = num
    }
  }
}
</script>

<style lang="scss">
  .m-popup-side {
    width: 8rem;
    transition: transform .2s;
  }
  .m-popup-side__content {
    width: 200%;
    transition: transform .2s;
  }
  .fade-right-enter-active {
    transform: translateX(100%);
  }
  .fade-left-enter-active {
    transform: translateX(-100%);
  }
  .fade-right-leave-active {
    transform: translateX(100%);
  }
  .fade-left-leave-active {
    transform: translateX(-100%);
  }
</style>
