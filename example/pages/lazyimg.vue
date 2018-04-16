<template>
  <common-entry title="图片懒加载">
    <m-lazy-img ref="lazyImg" selector="div.img" load-type="background">
      <div v-for="(n, i) in lazyImgData" :key="i">
        <div
          class="px-height-100 img"
          :style="{
            backgroundImage: `url(${require(`../assets/images/testLazyImg/default.png`)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }"
          :data-src="require(`../assets/images/testLazyImg/${i + 1}.jpg`)"
        />
      </div>
    </m-lazy-img>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import MLazyImg from '../../src/components/lazyimg'

export default {
  name: 'lazy-img',

  components: {
    MLazyImg, CommonEntry
  },

  data() {
    return {
      lazyImgData: new Array(20),
      lazyImgStart: false
    }
  },

  mounted() {
    setTimeout(() => {
      this.$refs.lazyImg.start()
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
  .m-bd-main-color {
    &::before {
      border-color: #753e81 !important;
    }
  }

  .color-main {
    color: #753e81 !important;
  }
</style>
