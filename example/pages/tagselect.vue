<template>
  <common-entry title="tab选择">
    <m-tag-select
      title="标题"
      title-cls="title-cls"
      tag-cls="tag-cls"
      :multi-choose="false"
      :list="list"
      :selected="activeList"
      main-color="red"
      @tag-change="handleTagChange"
    />
    <pre>
      import { TagSelect } from 'xm-mui'
    </pre>
    <p>events</p>
    <pre>
      @tag-change="handleTagChange"
    </pre>

    <p>props</p>
    <pre>
      props: {
        list: {
          type: Array,
          default() {
            return []
          }
        },
        selected: {
          type: Array,
          default() {
            return []
          }
        },
        title: {
          type: String,
          default: ''
        },
        titleCls: {
          type: String,
          default: ''
        },
        tagCls: {
          type: String,
          default: ''
        },
        activeCls: {
          type: String,
          default: ''
        },
        multiChoose: {
          type: Boolean,
          default: false
        }
      }
    </pre>
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
