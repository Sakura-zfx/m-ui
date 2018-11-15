<template>
  <div class="m-input__wrap">
    <input
      :type="inputType"
      :placeholder="placeholder || '请输入'"
      :value="value"
      ref="input"
      @input="handleInput"
      @blur="format"
    >
  </div>
</template>

<script>
export default {
  name: 'm-input',

  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    fixed: {
      type: [String, Number],
      default: 0
    },
    placeholder: String,
    max: {
      type: Number,
      default: Math.pow(2, 64)
    },
    min: {
      type: Number,
      default: -Math.pow(2, 64)
    }
  },

  computed: {
    isNumber() {
      return this.type === 'number'
    },

    isInt() {
      return this.fixed === 0 && this.isNumber
    },

    isText() {
      return !this.isNumber && this.inputType === 'text'
    },

    inputType() {
      if (this.isInt) {
        return 'tel'
      }
      // else if (this.isNumber) {
      //   return 'number'
      // }
      return 'text'
    },

    reg() {
      if (this.isNumber) {
        let reg
        if (this.isInt) {
          reg = /^\d+$/
        } else {
          reg = new RegExp(`^\\d+(\\.{0,1}\\d{0,${this.fixed}})$`)
        }
        return reg
      }
      return ''
    }
  },

  methods: {
    handleInput(e) {
      const val = e.target.value.trim()
      if (this.isText) {
        this.$emit('input', val)
        return
      }

      const input = this.$refs.input
      // const maxNum = this.max

      if (val === '') {
        this.$emit('input', '')
      } else if (!this.reg.test(val)) {
        // 不合法的数字
        input.value = this.value
      } else if (/^\d+\.$/.test(val)) {
        // 小数点结尾，认为未输入完成
        this.$emit('input', val)
      } else if (Number(val) > this.max) {
        // 大于最大值
        input.value = this.max
        this.$emit('input', this.max)
      } else if (Number(val) < this.min) {
        input.value = this.min
        this.$emit('input', this.min)
      } else {
        this.$emit('input', val)
      }
    },

    format(e) {
      if (!this.isText && !this.isInt) {
        this.$emit('input', Number(e.target.value).toFixed(this.fixed))
      } else if (this.isInt) {
        this.$emit('input', Number(e.target.value))
      }
    }
  }
}
</script>

<style lang="stylus">
  .m-input__wrap
    input
      -webkit-appearance none
      border 1px #dcdcdc solid
      border-radius 2px
      padding 0 10px
</style>
