<template>
  <div class="m-checkbox" @click="onClick">
    <div
      class="m-checkbox__check ib-middle"
      :class="{
        'bg-f2': disabled
      }"
      :style="boxSizeStyle"
    >
      <i
        v-if="checkIcon || checkedIcon"
        class="iconfont"
        :class="{
          [checkIcon]: !value,
          [checkedIcon]: value,
          'color-c999': !value
        }"
        :style="{
          fontSize: `${this.size}px`
        }"
      />
    </div>
    <span class="ib-middle" v-show="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'checkbox',

  props: {
    value: Boolean,
    label: String,
    mainColor: {
      type: String,
      default: 'red'
    },
    size: {
      type: Number,
      default: 16
    },
    checkIcon: String,
    checkedIcon: String,
    disabled: Boolean
  },

  computed: {
    boxSizeStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        borderRadius: `${this.size / 2}px`,
        color: this.value ? this.mainColor : '',
        borderColor: this.value ? this.mainColor : '',
        border: this.checkIcon ? 'none' : '1px solid #dedede'
      }
    }
  },

  methods: {
    onClick() {
      this.$emit('input', !this.value)
      this.$emit('change', !this.value)
    }
  }
}
</script>

<style lang="scss">
  .m-checkbox__check {
    line-height: 1;
  }
</style>
