<template>
  <common-entry title="底部tab菜单">
    <m-bottom-tab
      v-model="active"
      :tab-len="tabs.length"
    >
      <m-bottom-tab-item
        v-for="(item, i) in tabs"
        :curr-icon="item.currIcon"
        :icon="item.icon"
        :key="i"
        :num="item.num"
      >
        {{ item.name }}
      </m-bottom-tab-item>
    </m-bottom-tab>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import MBottomTab from '../../src/components/bottom-tab'
import MBottomTabItem from '../../src/components/bottom-tab-item'
const tabs = [
  {
    name: '首页',
    path: '/entry',
    icon: 'icon-cell',
    currIcon: 'icon-search'
  },
  {
    name: '分类',
    path: '/index',
    icon: 'icon-cell',
    currIcon: 'icon-search'
  },
  {
    name: '购物车',
    path: '/cart',
    icon: 'icon-cell',
    currIcon: 'icon-menu',
    num: 10
  },
  {
    name: '会员中心',
    path: '/user-center',
    icon: 'icon-cell',
    currIcon: 'icon-search'
  }
]

export default {
  name: 'bottom-tab',

  data() {
    return {
      active: 0,
      tabs
    }
  },

  components: {
    CommonEntry, MBottomTab, MBottomTabItem
  },

  methods: {

  }
}
</script>

<style>

</style>
