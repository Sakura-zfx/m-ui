<template>
  <div class="page">
    <div class="page__hd">
      <img :src="logoImg" alt="" class="logo">
      <h1 class="page__title">WE-VUE</h1>
    </div>

    <div @click="showPopup = true">popup</div>

    <popup
      title="古天乐"
      :visible="showPopup"
      title-align="left"
      :no-title="false"
      :content-height="300"
      @toggle="showPopup = !showPopup"
    />

    <tab
      color="blue"
      :active-tab="active"
      :tabs="['我发起的', '我收到的', '指挥我的']"
      :tab-line-width="30"
      @callback="tabCallback"
    />

    <alter-num
      :val="11"
      :min="1"
      :max="20"
      @num-change-callback="numChangeCallback"
    />
  </div>
</template>

<script>
import { navs } from '../router'
import logoImg from '../assets/images/logo.png'
import AlterNum from '../../src/components/numcomputer'
import Popup from '../../src/components/popup'
import Tab from '../../src/components/tab'
// import '../../lib/popup/style.css'

export default {
  data () {
    return {
      logoImg,
      navs,
      keyword: '',
      componentList: [],
      showPopup: false,
      active: 1
    }
  },

  mounted () {
    navs.map(navGroup => {
      this.componentList = this.componentList.concat(navGroup.navItems)
    })
  },

  computed: {
    filterResult () {
      return this.componentList.filter(value => new RegExp(this.keyword, 'i').test(value.name))
    }
  },

  methods: {
    tabCallback(index) {
      this.active = index
      console.log(index)
    },

    numChangeCallback(num) {
      console.log(num)
    }
  },

  components: {
    Popup, Tab, AlterNum
  }
}
</script>

<style scoped lang="scss">
  .logo {
    display: block;
    margin: 0 auto;
    width: 75px;
  }

  .page__hd {
    padding: 40px;

    .page__title {
      text-align: center;
      font-size: 20px;
      font-weight: 400;
    }
  }

  .page {
    margin-bottom: 0;
  }

  .cell-icon {
    display: block;
    margin-right: 5px;
    color: #2196f3;
    overflow: hidden;
    font-size: 20px;
    width: 25px;
    text-align: center;
  }

  .footer-copyright {
    margin: 40px 0 20px;
  }
</style>
