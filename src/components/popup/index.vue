<template>
  <div
    class="m-popup__container-width-mask"
  >
    <m-mask :show="showMask"/>

    <transition name="zoom-up">
      <div
        v-show="visible"
        :class="`m-popup__wrap ${getWrapperClass} position-f bottom-0 bg-fff left-0 width-100`"
        @click.stop=""
      >
        <div
          v-if="!noTitle"
          :class="`title-wrap ${titleAlign} px-padding-lr10`"
          class="position-r m-bd-b"
        >
          <div class="right-close position-a right-0 px-line-45 text-center" @click.stop="close">
            <slot name="icon">
              <i class="iconfont icon-guanbi" />
            </slot>
          </div>
          <div class="title color-c666 px-font-16">{{ title }}</div>
        </div>
        <div
          :class="`content-wrap touch-scroll overflow-a ${noTitle ? 'no-title' : ''}`"
          :style="{height: `${contentHeight}px`}"
        >
          <div class="content-item-wrap break-all height-100">
            <slot name="content">
              <p class="text-center">这是内容</p>
            </slot>
          </div>
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
  data() {
    return {
      showMask: this.visible
    }
  },

  name: 'm-popup',

  watch: {
    visible(val) {
      document.documentElement.style.overflow = val ? 'hidden' : ''
      setTimeout(() => {
        this.showMask = val
      }, 200)
    }
  },

  computed: {
    getWrapperClass() {
      if (!this.showBtn && !this.contentHeight) {
        return 'no-confirm'
      }
      return ''
    }
  },

  props: {
    title: {
      type: String,
      default: function () {
        return '标题'
      }
    },
    titleAlign: {
      type: String,
      default: function () {
        return 'text-center'
      }
    },
    contentHeight: {
      type: Number
    },
    confirmText: {
      type: String,
      default: function () {
        return '确定'
      }
    },
    noTitle: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    visible: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    showBtn: {
      type: Boolean,
      default: function () {
        return true
      }
    },
    mainColor: {
      type: String,
      default: function () {
        return 'red'
      }
    }
  },

  methods: {
    confirm() {
      this.$emit('confirm')
      this.$emit('toggle')
    },
    close() {
      this.$emit('close')
      this.$emit('toggle')
    }
  },
  destroyed () {
    this.$emit('toggle')
  },

  components: {
    MMask
  }
}
</script>

<style lang="scss">
  // @import '../../assets/iconfont/iconfont.css';

  .m-popup__wrap {
    transform: translateY(0);
    box-shadow: 0 -1px 6px 0 rgba(0,0,0,0.50);
    z-index: 1002;

    &.no-confirm {
      height: 360px;
    }

    .title-wrap {
      height: 45px;
      line-height: 45px;
      // border-bottom: 1px #f2f2f2 solid;

      .right-close {
        height: 100%;
        width: 50px;
        color: #9c9c9c;
      }
    }

    .content-wrap {
      height: 315px;
      &.no-title {
        height: 360px;
      }
    }

    .btn-wrap {
      height: 55px;
      line-height: 55px;
    }
  }

  .zoom-up-enter,
  .zoom-up-enter-active {
    opacity: 0;
  }
  .zoom-up-enter-to {
    animation: fadeInUp ease-out .4s;
  }
  .zoom-up-leave-active {
    animation: fadeOutDown ease-out .2s;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    50% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes fadeOutDown {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  }
</style>
