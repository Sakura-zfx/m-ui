<template>
  <common-entry title="错误收集">
    <p>用法</p>
    <pre>
      import sentry from 'xm-mui/lib/sentry'

      sentry.init('京东三期')
      // init 参数说明
      // @params release {String} 发布的版本名称
      // @params dsn {String} sentry收集的账号唯一链接
      // @params open {Boolean} 是否打开收集，默认情况下只在protocol === 'https:'时开启

      // 挂载实例
      Vue.prototype.$sentry = sentry

      // 手动捕获异常
      sentry.capture(error, errorName)
      // @params error {Error|Object|String} 错误对象
      // 默认应该为Error对象，也可以接收正常的对象或String
      // @params errorName {String} 可选
    </pre>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'

export default {
  name: 't-avatar',

  data() {
    return {
    }
  },

  components: {
    CommonEntry
  }
}
</script>

<style scoped>

</style>
