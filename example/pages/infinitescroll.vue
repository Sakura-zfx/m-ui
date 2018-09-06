<template>
  <common-entry title="列表无限滚动">
    <p><a href="https://github.com/Jmingzi/infinite-scrolling">文档地址请戳</a>，组件与此同步更新</p>
    <div class="wrap">
      <infinite-scroll
        :fn-fetch="fetch"
        :item-height="70"
        :loading="loading"
      >
        <span slot-scope="{ row }">
          {{ row.name }}
        </span>
      </infinite-scroll>
    </div>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import InfiniteScroll from '../../src/components/infinite-scroll'

export default {
  name: 'cell',

  components: {
    CommonEntry, InfiniteScroll
  },

  data() {
    return {
      loading: false
    }
  },

  methods: {
    fetch(dataList) {
      this.loading = true
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const res = Array.from(new Array(20)).fill(1)
          const data = []
          res.forEach((item, i) => {
            data.push({ name: `item ${i + 1 + dataList.length}`, id: i + 1 + dataList.length })
          })
          this.loading = false
          resolve(data)
        }, 1000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    position: absolute;
    top: 80px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #fff;
  }
</style>
