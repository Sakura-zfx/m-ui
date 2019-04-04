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

  computed: {
    isDiv() {
      return this.scrollWrap instanceof HTMLDivElement
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

  destroyed() {
    const handle = this.isDiv ? this.scrollWrap : window
    if (handle) {
      handle.removeEventListener('scroll', this.scrollCallback)
      this.hasEvent = false
    }
  },

  methods: {
    toTop() {
      this.scrollWrap && (this.scrollWrap.scrollTop = 0)
    },

    scrollCallback (e) {
      const scrollTop = this.isDiv
        ? e.target.scrollTop
        : document.documentElement.scrollTop || document.body.scrollTop
      this.show = scrollTop > this.throttle
    },

    addEvent(wrap) {
      if (wrap && !this.hasEvent) {
        const handle = this.isDiv ? wrap : window
        handle.addEventListener('scroll', this.scrollCallback, { passive: true })
        this.hasEvent = true
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
