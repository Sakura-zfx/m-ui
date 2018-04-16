<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page__title">XM-MUI</h1>
      <p style="text-align:center;color:#999;">造适合业务需求的轮子，拿来主义</p>
    </div>

    <template v-for="navGroup in navs">
      <div :key="navGroup.index">
        <p class="cell-group-title">{{ navGroup.groupTitle }}</p>
        <van-cell-group>
          <van-cell
            v-for="nav in navGroup.navItems"
            :key="nav.name"
            :to="nav.path"
            :title="nav.name"
            :label="nav.description"
            is-link
          />
        </van-cell-group>
      </div>

    </template>

    <div @click="showPopup = true">popup</div>

    <popup
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
    </popup>

    <tab
      color="blue"
      :active-tab="active"
      :tabs="['我发起的', '我收到的', '指挥我的']"
      :disable-tab="[1]"
      :tab-line-width="30"
      @callback="tabCallback"
    />

    <alter-num
      :val="11"
      :min="1"
      :max="20"
      @num-change-callback="numChangeCallback"
    />

    <p @click="msgBox">弹窗</p>

    <!--<img-->
    <!--:src="require(`../assets/images/testLazyImg/default.png`)"-->
    <!--:data-src="require(`../assets/images/testLazyImg/${i + 1}.jpg`)"-->
    <!--width="100%"-->
    <!--&gt;-->
  </div>
</template>

<script>
import { navs } from '../router'
import AlterNum from '../../src/components/numcomputer'
import Popup from '../../src/components/popup'
import Tab from '../../src/components/tab'
import MsgBox from '../../src/components/msgbox/index'

export default {
  data () {
    return {
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
    msgBox() {
      MsgBox.alert(1)
    },

    tabCallback(index) {
      this.active = index
      console.log(index)
    },

    numChangeCallback(num) {
      console.log(num)
    }
  },

  components: {
    Popup,
    Tab,
    AlterNum
  }
}
</script>

<style lang="scss">
  .cell-group-title {
    font-size: 14px;
    color: #999;
    margin: 10px 15px;
  }

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
</style>
