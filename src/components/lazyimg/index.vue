<template>
  <div class="m-lazyImg__wrap" @touchstart="handleMoveStart" @touchmove="handleMove">
    <slot />
  </div>
</template>

<script>
import testMeet from './testMeet'
import { handleMoveStart, handleMove } from './touchmove'

export default {
  data() {
    return {
      imgWrapper: null,
      moveEventSwitch: true
    }
  },

  mounted() {
    this.imgWrapper = this.getImgWrapper()
  },

  methods: {
    start() {
      // console.log('start')
      this.moveEventSwitch = true
      if (!this.imgWrapper) {
        console.log(`imgWrapper is null`)
        return
      }

      const imgList = Array.from(this.imgWrapper.childNodes)
        .filter(el => el.dataset.src && el.src)
      const list = imgList.filter(el => !el.dataset.load && this.inViewport(el))
      // console.log('list', list.length)
      list.forEach(el => this.loadImg(el))
    },

    destroy() {
      this.moveEventSwitch = false
    },

    handleMoveStart(e) {
      this.moveEventSwitch && handleMoveStart(e)
    },

    handleMove(e) {
      this.moveEventSwitch && handleMove(e, this.start)
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
    },

    getImgWrapper() {
      let node = this.$el
      while (
        node &&
        node.childNodes &&
        node.childNodes[0] &&
        node.childNodes[0].tagName !== 'IMG'
      ) {
        node = node.childNodes[0]
      }
      return node
    }
  }
}
</script>

<style></style>
