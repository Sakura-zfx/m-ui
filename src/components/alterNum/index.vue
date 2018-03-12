<!--
  name: 数量加减器
  example: 详情页商品数量加减
-->
<template>
  <div class="num-compute cl text-center px-height-30 px-width-100 color-c999 input-db bg-fff">
    <div
      :class="`decrease fl px-font-20 ${Number(num) === Number(min) || !num ? 'bg-f2' : 'hover-bg'} px-width-30 height-100`"
      @click.stop="add(false)">
      <span>-</span>
    </div>
    <div
      :class="`plus fr px-font-20 ${Number(num) === Number(max) ? 'bg-f2' : 'hover-bg'} px-width-30 height-100`"
      @click.stop="add(true)">
      <span>+</span>
    </div>
    <div class="px-width-40 height-100 display-ib">
      <input
        type="tel"
        class="text-center width-100 height-100"
        ref="input"
        @click.stop=""
        @input="changeNum"
        :value="num">
    </div>
  </div>
</template>

<script>
export default {
  name: 'alter-num',

  data() {
    return {
      num: this.val,
      timer: null
    }
  },

  watch: {
    val: function (num) {
      // console.log(num)
      this.num = num
      // this.$refs.input.value = num
      return num
    }
  },

  methods: {
    isEmpty(val) {
      return val === ''
    },

    changeNum(e) {
      let val = e.target.value
      if (this.isEmpty(val)) {
        this.num = val
        this.timer && clearTimeout(this.timer)
      } else if (
        /^\d+$/.test(val) &&
        val >= this.min &&
        val <= this.max
      ) {
        this.num = val

        // clear
        this.timer && clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.broadCast(this.num)
        }, 1000)
      } else {
        // toast
        if (val > this.max) {
          // native.toast(`商品数量最多为${this.max}`)
          this.$refs.input.value = this.num
          this.timer && clearTimeout(this.timer)
        } else {
          console.log(`val is not legal : ${val}, max: ${this.max}, min: ${this.min}`)
          this.$refs.input.value = this.num
          this.timer && clearTimeout(this.timer)
        }
      }
    },

    add(isAdd) {
      if (isAdd && this.num < this.max) {
        this.num++
        this.broadCast(this.num)
      } else if (isAdd === false && this.num > this.min) {
        this.num--
        this.broadCast(this.num)
      }
    },

    broadCast(num) {
      // numChangeCallback
      // @param num {Number} 更新后的数量
      // @param changeNumTransferData {*} 中转数据
      // @param val {Number} 更新前的数量
      this.$emit('num-change-callback', num, this.changeNumTransferData, this.val)
    }
  },

  props: {
    val: {
      type: Number | String,
      default: function () {
        return 1
      }
    },
    max: {
      type: Number | String,
      default: function () {
        return 200
      }
    },
    min: {
      type: Number | String,
      default: function () {
        return 1
      }
    },
    changeNumTransferData: null
  }
}
</script>

<style lang="scss">
  .num-compute {
    &.input-db {
      border-top: 1px #f2f2f2 solid;
      border-bottom: 1px #f2f2f2 solid;
    }

    .decrease,
    .plus {
      line-height: 25px;
      border-left: 1px #f2f2f2 solid;
      border-right: 1px #f2f2f2 solid;
    }
  }
</style>
