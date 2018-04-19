<template>
  <div
    class="bottom-tab__wrap shadow-top z-index-1 width-100 px-height-50 bg-fff font-0 text-center"
    :class="{ 'bottom-tab__wrap-fixed': fixed }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'bottom-tab',

  props: {
    value: Number,
    tabLen: {
      type: Number,
      default: 2
    },
    fixed: {
      type: Boolean,
      default: true
    },
    mainColor: {
      type: String,
      default: 'red'
    }
  },

  data() {
    return {
      tabs: []
    }
  },

  watch: {
    tabs() {
      this.setActiveItem()
    },
    value() {
      this.setActiveItem()
    }
  },

  methods: {
    onChange(active) {
      this.$emit('input', active)
      this.$emit('change', active)
    },

    setActiveItem() {
      this.tabs.forEach((item, index) => {
        item.active = index === this.value
      })
    }
  }
}
</script>

<style lang="scss">
  .bottom-tab__wrap-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>
