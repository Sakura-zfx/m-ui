<template>
  <transition name="zoom-up">
    <div
      v-if="visible"
      :class="`m-popup__wrap ${showBtn ? '' : 'no-confirm'}
      position-a bottom-0 bg-fff left-0 width-100`">
      <div :class="`title-wrap ${titleAlign}`">
        <div class="right-close fr px-line-45 text-center color-c999" @click.stop="close">
          <slot name="icon">关闭</slot>
        </div>
        <div class="title color-c666 px-margin-l50 px-font-16">{{ title }}</div>
      </div>
      <div :class="`content-wrap touch-scroll overflow-a`" @touchmove.stop="">
        <div class="content-item-wrap break-all height-100">
          <slot name="content">这是内容</slot>
        </div>
      </div>
      <div
        v-if="showBtn"
        class="btn-wrap hover-bg-main text-center px-font-18 color-fff"
        :style="{ backgroundColor: mainColor }"
        @click="confirm">
        {{ confirmText }}
      </div>
    </div>
  </transition>
</template>

<script>
import mask from '../mask/index.js'

export default {
  created() {
    if (this.visible) {
      mask.show()
    }
  },
  name: 'm-popup',
  watch: {
    visible(val) {
      if (val) {
        mask.show()
      } else {
        setTimeout(mask.hide, 200)
      }
      return val
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
    confirmText: {
      type: String,
      default: function () {
        return '确定'
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
  }
}
</script>

<style lang="scss">
  .m-popup__wrap {
    transform: translateY(0);
    height: 415px;
    box-shadow: 0 -1px 6px 0 rgba(0,0,0,0.50);
    z-index: 1002;

    &.no-confirm {
      height: 360px;
    }

    .title-wrap {
      height: 45px;
      line-height: 45px;
      border-bottom: 1px #cecece solid;
      .title {
        margin-right: -50px;
      }
      .right-close {
        height: 100%;
        width: 50px;
      }
    }

    .content-wrap {
      height: 315px;
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
