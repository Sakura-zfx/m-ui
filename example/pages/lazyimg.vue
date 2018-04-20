<template>
  <common-entry title="图片懒加载">
    <pre>
      import { LazyImg } from 'xm-mui'
    </pre>
    <p>tips: 只针对移动端touchmove事件做监听！！！</p>
    <pre>
      props: {
        selector: {
          type: String,
          required: true
        },
        throttleTime: {
          type: Number,
          default: 1000
        },
        loadType: {
          type: String,
          default: 'img' // background 背景图
        }
      }
    </pre>
    <p>methods</p>
    <pre>
      this.$refs.lazyImg.start()
      this.$refs.lazyImg.destroy()
    </pre>
    <p>因为图片数据是异步加载的，加载完成时，需要手动触发。</p>
    <p>用法</p>
    <pre>
      &lt;lazy-img
        ref="lazyImg"
        selector="div.img"
        load-type="background"
      &gt;
        // v-for your data ... div elements
      &lt;/lazy-img&gt;
    </pre>

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

    <p>props</p>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import MLazyImg from '../../src/components/lazy-img'

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
