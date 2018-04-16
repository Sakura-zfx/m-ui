<template>
  <div>
    <van-nav-bar
      title="图片懒加载"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

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
  </div>
</template>

<script>
import MLazyImg from '../../src/components/lazyimg'

export default {
  name: 'lazy-img',

  components: {
    MLazyImg
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
  },

  methods: {
    onClickLeft() {
      history.back()
    }
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
