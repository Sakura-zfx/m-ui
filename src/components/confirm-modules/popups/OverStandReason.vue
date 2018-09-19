<template>
  <m-popup
    title="选择超标原因"
    confirm-text="确定"
    :show-btn="true"
    :visible.sync="show"
    :main-color="mainColor"
    @confirm="confirm"
  >
    <template slot="content">
      <cell
        v-for="item in list"
        :key="item.id"
        :is-link="false"
        @on-click="selected = item"
      >
        <span
          slot="label"
          :style="getColorMain(selected.id === item.id)"
        >
          {{ item.name }}
        </span>
        <i
          v-if="selected.id === item.id"
          class="iconfont icon-duigou px-font-14"
          :style="getColorMain(selected.id === item.id)"
        />
        <i v-else />
      </cell>
      <div class="overstand__reason">
        <textarea
          v-if="selected.id === 5"
          placeholder="请填写备注信息，不超过50个字"
          v-model="otherReason"
          maxlength="50"
        />
      </div>
    </template>
  </m-popup>
</template>

<script>
import Cell from '../../cell'
import MPopup from '../../popup'

export default {
  name: 'popup-overstand',

  components: {
    MPopup, Cell
  },

  data() {
    return {
      show: false,
      selected: {},
      otherReason: ''
    }
  },

  props: {
    mainColor: String,
    list: Array,
    selectedItem: Object,
    visible: Boolean,
    doSelectReason: Function
  },

  watch: {
    selectedItem(val) {
      this.setReason(val)
    },
    show(val) {
      this.$emit('update:visible', val)
      if (val) {
        this.setReason(this.selectedItem)
      }
    },
    visible(val) {
      this.show = val
    }
  },

  created() {
    this.show = this.visible
    this.setReason(this.selectedItem)
  },

  methods: {
    setReason(item) {
      if (item) {
        this.selected = item
        if (item.id === 5) {
          this.otherReason = item.name
        }
      }
    },

    getColorMain(predicate) {
      return predicate ? { color: this.mainColor || 'red' } : null
    },

    confirm() {
      if (this.selected.id === 5) {
        this.doSelectReason({ id: 5, name: this.otherReason })
      } else if (this.selected.id) {
        this.doSelectReason(this.selected)
      }
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="stylus">
  .overstand__reason
    margin: 10px
    textarea
      background-color #f2f2f2
      width 100%
      height 100px
      border none
      padding 10px
</style>
