<template>
  <common-entry title="tab选择">
    <m-tag-select
      title="标题"
      title-cls="title-cls"
      tag-cls="tag-cls"
      active-cls="m-bd-main-color color-main"
      :multi-choose="false"
      :list="list"
      :selected="activeList"
      @tag-change="handleTagChange"
    />
  </common-entry>
</template>

<script>
import MTagSelect from '../../src/components/tag-select'
import CommonEntry from './commonEntry'

export default {
  name: 'tag-select',

  components: {
    MTagSelect, CommonEntry
  },

  data() {
    return {
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

  methods: {
    handleTagChange(item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss">
  .m-bd-main-color {
    &::before {
      border-color: #753e81 !important;
    }
  }

  .color-main {
    color: #753e81 !important;
  }
</style>
