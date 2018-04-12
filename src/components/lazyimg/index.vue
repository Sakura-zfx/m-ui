<template>
  <div class="m-lazyImg__wrap" ref="lazyImgWrap">
    <slot />
  </div>
</template>

<script>
import testMeet from './testMeet'
import { handleMoveStart, handleMove } from './touchmove'
import throttle from './throttle'

export default {
  props: {
    selector: {
      type: String,
      required: true
    },
    throttleTime: {
      type: Number,
      default: 1000
    }
  },

  data() {
    return {
      moveEventSwitch: true
    }
  },

  mounted() {
    const imgWrap = this.$refs.lazyImgWrap
    imgWrap.addEventListener('touchstart', e => {
      this.moveEventSwitch && handleMoveStart(e)
    })
    imgWrap.addEventListener('touchmove', throttle(e => {
      this.moveEventSwitch && handleMove(e, this.start)
    }, this.throttleTime, { leading: true, trailing: true }))
  },

  methods: {
    start() {
      this.moveEventSwitch = true
      const imgNodes = this.$el.querySelectorAll(this.selector)
      const imgList = Array.from(imgNodes).filter(el =>
        el.dataset.src &&
        !el.dataset.load &&
        this.inViewport(el)
      )
      // console.log('imgList', imgList.length)
      imgList.forEach(el => this.loadImg(el))
    },

    destroy() {
      this.moveEventSwitch = false
    },

    inViewport(el) {
      return testMeet(el, {
        top: 0, // 元素距离顶部
        right: 0, // 元素距离右边
        bottom: 0, // 元素距离下面
        left: 0 // 元素距离左边
      })
    },

    loadImg(el) {
      const img = new Image()
      img.src = el.dataset.src
      img.onload = () => {
        el.src = el.dataset.src
        el.setAttribute('data-load', true)
      }
      img.onerror = () => {
        el.setAttribute('data-load', true)
      }
    }
  }
}
</script>

<style>
  .m-lazyImg__wrap {}
</style>
