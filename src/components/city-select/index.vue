<template>
  <popup
    :title="title"
    :show-btn="false"
    :visible.sync="visible"
    :main-color="mainColor"
    @toggle="$emit('update:visible', false)"
  >
    <div slot="content" class="city-select-sample height-100 position-r">
      <city-item
        ref="item"
        :current-level-list="currentLevelList"
        :max-level="maxLevel"
        :main-color="mainColor"
        @on-city-change="onCityChange"
        @on-select="onSelect"
      />
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'
import CityItem from '../city-select-item'

export default {
  name: 'city-select',

  components: {
    Popup,
    CityItem
  },

  data() {
    return {
      selectedIndex: [],
      selectedRes: []
    }
  },

  props: {
    title: {
      type: String,
      default: '城市选择'
    },
    mainColor: {
      type: String,
      default: 'red'
    },
    visible: {
      type: Boolean,
      default: false
    },
    maxLevel: {
      type: Number,
      default: 3
    },
    currentLevelList: [Array, null]
  },

  watch: {
    visible(val) {
      if (val) {
        this.$refs.item.reset()
        this.$refs.item.init()
      }
    }
  },

  methods: {
    onCityChange(item, itemIndex, currLevel) {
      this.$emit('on-city-change', item, itemIndex, currLevel)
    },

    onSelect(res, index) {
      this.$emit('update:visible', false)
      this.$emit('on-select', res, index)
    }
  }
}
</script>

<style lang="scss">
</style>
