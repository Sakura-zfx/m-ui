<template>
  <common-entry title="popup">
    <pre>
      import { Popup } from 'xm-mui'
    </pre>
    <a href="javascript:" @click="showPopup = true">打开Popup</a>
    <pre>
      &lt;popup
        title="古天乐"
        :content-height="220"
        :visible="showPopup"
        title-align="left"
        :no-title="false"
        @toggle="showPopup = false"
      /&gt;
    </pre>

    <p>props</p>
    <pre>
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
      }
    </pre>

    <m-popup
      title="古天乐"
      :content-height="220"
      :visible="showPopup"
      title-align="left"
      :no-title="false"
      @toggle="showPopup = false"
    >
      <div slot="content">
        <p class="px-line-40 bd-ccc-b">this is a test!</p>
        <p class="px-line-40 bd-ccc-b">this is a test!</p>
        <p class="px-line-40 bd-ccc-b">this is a test!</p>
        <p class="px-line-40 bd-ccc-b">this is a test!</p>
        <p class="px-line-40 bd-ccc-b">this is a test!</p>
        <p class="px-line-40 bd-ccc-b">this is a test!</p>
        <p class="px-line-40 bd-ccc-b">this is a test!</p>
      </div>
    </m-popup>
  </common-entry>
</template>

<script>
import MPopup from '../../src/components/popup'
import CommonEntry from './commonEntry'

export default {
  name: 'popup',

  components: {
    MPopup, CommonEntry
  },

  data() {
    return {
      showPopup: false
    }
  }
}
</script>

<style scoped>

</style>
