<template>
  <div class="page px-font-14">
    <div class="page__hd">
      <h1 class="page__title">
        XM-MUI
        <a class="px-font-12" href="https://github.com/Jmingzi/m-ui" target="_blank">Github</a>
      </h1>
      <p style="text-align:center;color:#999;">用拿来主义，造适合业务需求的轮子</p>
    </div>
    <van-search
      background="transparent"
      placeholder="搜索组件"
      v-model="keyword"
    />
    <van-cell-group v-show="keyword">
      <van-cell
        v-for="item in filterResult"
        :key="item.name"
        :title="item.name"
        :to="item.path"
        is-link
      />
    </van-cell-group>

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
  </div>
</template>

<script>
import { navs } from '../router'

export default {
  data () {
    return {
      navs,
      keyword: '',
      componentList: []
    }
  },

  mounted () {
    navs.map(navGroup => {
      this.componentList = this.componentList.concat(navGroup.navItems)
    })
  },

  computed: {
    filterResult() {
      return this.componentList.filter(value => new RegExp(this.keyword, 'i').test(value.name))
    }
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
    padding: 40px 0 20px 0;

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
