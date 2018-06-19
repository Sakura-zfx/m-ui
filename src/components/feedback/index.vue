<template>
  <div class="feed-back px-padding-t10">
    <textarea
      class="px-padding-10"
      :maxlength="query.maxlength || 500"
      :placeholder="placeholder"
      :value="content"
      @input="handleInput"
    />
    <div
      class="feed-btn"
      :style="{ backgroundColor: mainColor }"
      @click="$emit('on-btn', content)"
    >
      {{ btnText }}
    </div>
  </div>
</template>

<script>
import utils from '../../utils/utils'

export default {
  name: 'feedback',

  data() {
    return {
      // content: ''
    }
  },

  props: {
    placeholder: {
      type: String,
      default: '请输入'
    },
    btnText: {
      type: String,
      default: '提交'
    },
    mainColor: {
      type: String,
      default: 'red'
    },
    value: String,
    title: String
  },

  computed: {
    query() {
      return this.$route.query
    },

    content() {
      return this.query.callback ? this.query.content : this.value
    }
  },

  watch: {
    value(val) {
      this.content = val
    }
  },

  created() {
    document.title = this.query.title || this.title
  },

  methods: {
    handleInput(e) {
      if (this.query.callback) {
        utils.callParentJs(this.query.callback, e.target.value)
      } else {
        this.$emit('input', e.target.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .feed-back {
    padding-bottom: 10px;
  }
  .feed-btn {
    margin: 40px 30px 0 30px;
    line-height: 50px;
    border-radius: 4px;
    color: #fff;
    text-align: center;
  }
  textarea {
    width: 100%;
    height: 150px;
    background-color: #fff;
    margin: 0;
  }
</style>
