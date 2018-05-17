<template>
  <div class="m-msgBox__wrap" v-show="visible">
    <transition name="bounce">
      <div class="m-msgBox" v-show="visible" @touchmove.stop="">
        <div class="m-msgBox_title" v-if="title">{{ title }}</div>
        <div class="m-msgBox_content overflow-a touch-scroll">
          <slot>
            <span>{{ msg }}</span>
          </slot>
        </div>
        <div class="m-msgBox_foot m-bd-t">
          <a
            v-if="!noCancel"
            href="javascript:"
            class="m-msgBox_btn"
            :class="{
              'm-bd-r': !this.noConfirm,
              'w100': this.noConfirm
            }"
            @click="doAction('cancel')"
          >
            {{ cancelTxt }}
          </a>
          <a
            v-if="!noConfirm"
            href="javascript:"
            class="m-msgBox_btn"
            :class="{
              'w100': this.noCancel,
              [confirmCls]: !this.noCancel
            }"
            @click="doAction('confirm')"
          >
            {{ okTxt }}
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'msg-box',
  data() {
    return {
      title: '',
      msg: '',
      cancelTxt: '取消',
      okTxt: '确认',
      noCancel: false,
      noConfirm: false,
      visible: false,
      confirmCls: ''
    }
  },
  destroyed() {
    this.visible = false
  },
  methods: {
    doAction(action) {
      // eslint-disable-next-line
      this.callback.call(this, action)
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .m-msgBox__wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    left: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 1003;
  }
  .m-msgBox {
    position: absolute;
    width: 270px;
    background-color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    text-align: center;
    overflow: hidden;
    font-size: 14px;

    .m-msgBox_title {
      font-size: 18px;
      padding: 20px 20px 0 20px;
    }
    .m-msgBox_content {
      max-height: 250px;
      overflow: hidden;
      color: #262A30;
      padding: 15px 20px;
    }
    .m-msgBox_foot {
      font-size: 0;

      .m-msgBox_btn {
        display: inline-block;
        vertical-align: middle;
        width: 50%;
        font-size: 17px;
        line-height: 44px;
        color: #0076FF;
        &.w100 {
          width: 100%;
        }
        &.color-blue {
          color: #0076FF !important;
        }
      }
    }
  }

  .bounce-enter,
  .bounce-enter-active {
    opacity: 0;
  }
  .bounce-enter-to {
    opacity: 1;
    transition: opacity .1s;
  }
</style>
