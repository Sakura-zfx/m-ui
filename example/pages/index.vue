<template>
  <div class="page">
    <div class="page__hd">
      <img :src="logoImg" alt="" class="logo">
      <h1 class="page__title">WE-VUE</h1>
    </div>

    <div @click="showPopup = true">popup</div>

    <popup
      title="古天乐"
      :content-height="520"
      :visible="showPopup"
      title-align="left"
      :no-title="false"
      :show-btn="false"
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

    <tag-select
      title="标题"
      title-cls="title-cls"
      tag-cls="tag-cls"
      active-cls="m-bd-main-color color-main"
      :multi-choose="false"
      :list="list"
      :selected="activeList"
      @tag-change="handleTagChange"
    />
  </div>
</template>

<script>
import { navs } from '../router'
import logoImg from '../assets/images/logo.png'
import AlterNum from '../../src/components/numcomputer'
import Popup from '../../src/components/popup'
import Tab from '../../src/components/tab'
import TagSelect from '../../src/components/tagSelect'
// import '../../lib/popup/style.css'

export default {
  data () {
    return {
      logoImg,
      navs,
      keyword: '',
      componentList: [],
      showPopup: false,
      active: 1,
      list: [
        {
          label: '汉庭',
          value: 1
        },
        {
          label: '海友',
          value: 2
        },
        {
          label: '宜必思',
          value: 3
        },
        {
          label: '橘子水晶',
          value: 4
        },
        {
          label: '索菲特',
          value: 5
        },
        {
          label: '宜必思',
          value: 6
        },
        {
          label: '橘子水晶',
          value: 7
        },
        {
          label: '索菲特',
          value: 8
        }
      ],
      activeList: [
        {
          label: '汉庭',
          value: 1
        }
      ]
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
    },

    handleTagChange(item) {
      // this.activeList.push(item)
      console.log(item)
    }
  },

  components: {
    Popup,
    Tab,
    AlterNum,
    TagSelect
  }
}
</script>

<style lang="scss">
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

  .m-bd-main-color {
    &::before {
      border-color: #753e81 !important;
    }
  }

  .color-main {
    color: #753e81 !important;
  }
</style>
