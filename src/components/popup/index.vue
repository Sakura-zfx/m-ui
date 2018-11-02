<template>
  <!--scroll-wrap position-f top-0 bottom-0 left-0 right-0-->
  <div
    class="m-popup__container-width-mask"
    v-show="showMask"
  >
    <m-mask :show="showMask" @tap="close" />

    <transition
      name="m-popup__zoom-up"
      @after-leave="animationEnd"
    >
      <div
        v-show="visible"
        class="m-popup__wrap position-f bottom-0 bg-fff left-0 width-100"
        @click.stop=""
      >
        <div
          v-if="!noTitle"
          :style="{
            padding: titleAlign === 'center' ? '0 50px' : '0 50px 0 10px'
          }"
          class="title-wrap position-r m-bd-b"
        >
          <div class="right-close position-a right-0 px-line-45 text-center" @click="close">
            <slot name="icon">
              <i class="iconfont icon-guanbi" />
            </slot>
          </div>
          <div
            :class="{
              'text-center': titleAlign === 'center'
            }"
            class="title color-c666 px-font-16"
          >
            {{ title }}
          </div>
        </div>
        <div
          class="content-wrap overflow-a break-all touch-scroll"
          :class="{ 'no-title': noTitle }"
          :style="{height: `${contentHeight}px`}"
        >
          <slot v-if="$slots.default" />
          <slot name="content" v-else>
            <p class="text-center">这是内容</p>
          </slot>
        </div>
        <div
          v-if="showBtn"
          class="btn-wrap hover-bg-main text-center px-font-18 color-fff"
          :style="{ backgroundColor: mainColor }"
          @click="confirm"
        >
          {{ confirmText }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import MMask from '../mask/mask'

export default {
  name: 'm-popup',

  props: {
    title: {
      type: String,
      default: '标题'
    },
    titleAlign: {
      type: String,
      default: 'center'
    },
    contentHeight: {
      type: Number,
      default: 360
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    noTitle: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    mainColor: {
      type: String,
      default: 'red'
    }
    // DomElem: {
    //   type: HTMLDivElement,
    //   default: null
    // }
    // wrapperSelector: {
    //   type: String,
    //   default: ''
    // }
  },

  computed: {
    // getWrapperClass() {
    //   if (!this.showBtn && !this.contentHeight) {
    //     return 'no-confirm'
    //   }
    //   return ''
    // }
  },

  data() {
    return {
      showMask: this.visible
      // wrapperElem: null
    }
  },

  watch: {
    visible(val) {
      if (val) {
        const top = document.documentElement.scrollTop || document.body.scrollTop
        document.body.style.cssText = `position:fixed;width:100%;top:${-top}px;overflow:hidden;`
        this.showMask = true
        document.body.addEventListener('touchmove', this.listenMoveEventHandler)
      } else {
        const top = parseInt(document.body.style.top) * -1
        document.body.style.cssText = ``
        document.documentElement.scrollTop = top
        document.body.scrollTop = top
        document.body.removeEventListener('touchmove', this.listenMoveEventHandler)
      }
      // if (val) {
      //   this.showMask = true
      // }
    }
  },

  methods: {
    // getElem() {
    //   if (!this.wrapperSelector) {
    //     return null
    //   }
    //   if (!this.wrapperElem) {
    //     this.wrapperElem = document.querySelector(this.wrapperSelector)
    //   }
    //   return this.wrapperElem
    // },

    animationEnd() {
      this.showMask = false
    },

    listenMoveEventHandler(e) {
      e.stopPropagation()
      e.preventDefault()
    },

    confirm() {
      this.$emit('confirm')
      this.$emit('toggle')
      this.$emit('update:visible', false)
    },
    close() {
      this.$emit('close')
      this.$emit('toggle')
      this.$emit('update:visible', false)
    }
  },

  deactivated() {
    this.$emit('toggle')
    this.$emit('update:visible', false)
    document.body.style.cssText = ``
    document.body.removeEventListener('touchmove', this.listenMoveEventHandler)
  },

  beforeDestroy() {
    this.$emit('toggle')
    this.$emit('update:visible', false)
    document.body.style.cssText = ``
    document.body.removeEventListener('touchmove', this.listenMoveEventHandler)
  },

  components: {
    MMask
  }
}
</script>

<style lang="scss">
  .m-popup__container-width-mask {
    // z-index: 1000;
  }

  .m-popup__wrap {
    box-shadow: 0 -1px 6px 0 rgba(0,0,0,0.50);
    z-index: 1002;
    transition: transform .3s ease;

    /*&.no-confirm {*/
      /*height: 360px;*/
    /*}*/

    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .title-wrap {
      height: 45px;
      line-height: 45px;

      .right-close {
        height: 100%;
        width: 50px;
        color: #9c9c9c;
      }
    }

    /*.content-wrap {*/
      /*height: 315px;*/
      /*&.no-title {*/
        /*height: 360px;*/
      /*}*/
    /*}*/

    .btn-wrap {
      height: 55px;
      line-height: 55px;
    }
  }

  /*html, body, div {*/
    /*overscroll-behavior: none;*/
  /*}*/
  .content-wrap {
    /*overscroll-behavior: smooth;*/
    scroll-behavior: smooth;
  }

  .m-popup__zoom-up-enter {
    opacity: 0;
  }
  .m-popup__zoom-up-enter-active {
    animation: fadeIn .3s ease;
  }
  .m-popup__zoom-up-leave-active {
    transform: translate3d(0, 100%, 0);
  }
  @keyframes fadeIn {
    from {
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: none;
    }
  }
</style>
