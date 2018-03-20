<template>
  <div
    class="tag-select px-padding-lr15"
  >
    <p
      class="tag-select__title px-font-12 px-padding-tb15"
      v-show="title"
      :class="`${titleCls}`"
    >
      {{ title }}
    </p>
    <ul
      class="tag-select__list font-0"
    >
      <li
        class="tag-select__list-item ib-top px-font-14 m-bd text-center over-text px-width-80"
        v-for="(item, index) in list"
        :key="index"
        :class="`${tagCls} ${isActiveItem(item) ? activeCls : ''}`"
        @click="doSelect(item)"
      >
        <i
          v-if="item.icon"
          :class="item.icon"
        />
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tag-select',

  data() {
    return {
      selectedList: null
    }
  },

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
  },

  methods: {
    isActiveItem(item) {
      if (!this.selectedList) {
        return ''
      }

      if (Array.isArray(this.selectedList)) {
        return this.selectedList.some(i => i.value === item.value) && 'tag-select-item-active'
      } else {
        return (this.selectedList.value === item.value) && 'tag-select-item-active'
      }
    },

    doSelect(item) {
      let index = -1
      if (Array.isArray(this.selectedList)) {
        this.selectedList.forEach((i, idx) => {
          if (i.value === item.value) {
            index = idx
          }
        })
        if (index === -1) {
          this.selectedList.push(item)
        } else {
          this.selectedList.splice(index, 1)
        }
      } else {
        if (this.selectedList.value === item.value) {
          this.selectedList = {}
        } else {
          this.selectedList = item
        }
      }

      this.$emit('tag-change', this.selectedList)
    }
  },

  mounted() {
    if (this.$props.multiChoose) {
      this.selectedList = this.$props.selected
    } else {
      this.selectedList = this.$props.selected[0]
    }
  }
}
</script>

<style lang="scss">
.tag-select {
  .tag-select__title {
    line-height: 1;
    color: #959ba3;
  }

  .tag-select__list-item {
    padding: 2px 0;
    width: 30%;
    margin: 0 5% 10px 0;
    color: #5c626b;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}
</style>
