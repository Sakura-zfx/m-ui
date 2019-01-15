<template>
  <div
    v-show="show"
    @click="toTop"
    class="suspended__back-top"
  >
    <img
      src="https://global.uban360.com/sfs/file?digest=fidd96b197e8bb731094ed738e7a26f1bd1&fileType=2"
      width="100%"
    >
  </div>
</template>

<script>
export default {
  name: 'back-top',

  data() {
    return {
      show: false,
      hasEvent: false
    }
  },

  props: {
    scrollWrap: [HTMLDivElement, HTMLHtmlElement, HTMLBodyElement],
    throttle: {
      type: Number,
      default: 1000
    }
  },

  watch: {
    scrollWrap(wrap) {
      this.addEvent(wrap)
    }
  },

  mounted() {
    this.addEvent(this.scrollWrap)
  },

  beforeDestroy() {
    if (this.scrollWrap) {
      this.hasEvent = false
      this.scrollWrap.removeEventListener('scroll', this.scrollCallback)
    }
  },

  methods: {
    toTop() {
      this.scrollWrap && (this.scrollWrap.scrollTop = 0)
    },

    scrollCallback (e) {
      this.show = e.target.scrollTop > this.throttle
    },

    addEvent(wrap) {
      if (wrap && !this.hasEvent) {
        this.hasEvent = true
        wrap.addEventListener('scroll', this.scrollCallback, { passive: true })
      }
    }
  }
}
</script>

<style lang="stylus">
  .suspended__back-top
    position fixed
    right 10px
    bottom 80px
    width 40px
    height 40px
</style>
