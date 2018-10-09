<template>
  <common-entry title="axios请求模块">
    <p>usage</p>
    <pre>
 import Http from 'xm-mui/lib/http'
    </pre>
    <p>options</p>
    <pre>
const defaultOp = {
  uri: {
    test: '/test'
  },
  baseURL: local ? 'http://app.e.uban360.net' : '',
  timeout: 20000,
  // eslint-disable-next-line
  toast: window.JSBridge ? window.JSBridge.toast : alert,
  loading: {
    open() {},
    close() {}
  },
  contentType: 'application/x-www-form-urlencoded',
  bindSentry: sentry // 引入的sentry组件，在接口异常时捕获
}
    </pre>
    <p class="px-margin-t10">methods</p>
    <pre>
// 1.初始化时标记请求的名称与路径map
new Http({
  uri: {
    // [name]: [path],
    getInfo: '/gateway/common/user/info'
  }
})
this.$http.get('getInfo', { bizType: 3 })

// 2.动态注入方法，会返回一个方法，该注入是会被缓存的
this.$http.inject(
  'get',
  'getInfo',
  '/gateway/common/user/info'
)

// 注入后也可以直接使用
this.$http.get('getInfo', { bizType: 3 })
    </pre>
    <p class="px-margin-t10 color-c999">特性</p>
    <p>data有3个特性参数：</p>
    <p>1. mock特性，data.mock = true，会去请求/static/文件夹下的同名json</p>
    <p>2. toast，data.toast = false，请求报错时，不提示。result.error ? result.error.name : result.msg</p>
    <p>3. loading, data.loading = true，请求时不显示loading。</p>
    <p class="px-margin-t20 color-c999">其它特性</p>
    <p class="line-through">1. 允许特殊状态的code或status，即allowCodes。（已废弃）</p>
    <p>2. 自动处理loading与toast（同时发起多个请求，loading会在所有请求结束后才close）</p>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import Http from '../../src/components/http'
import Toast from '../../src/components/toast'
// import axios from 'axios'
import sentry from '../../src/components/sentry'

export default {
  name: 'cell',

  data() {
    return {
      http: null
    }
  },

  components: {
    CommonEntry
  },

  created() {
    sentry.init('xm-mui库test', undefined, true)

    this.http = new Http({
      loading: this.$loading,
      toast: Toast,
      uri: {
        bizInfo: '/gateway/common/app',
        payAuth: '/gateway/common/payAuth',
        getUsersDetail: '/gateway/external/get',
        pay: '/gateway/common/pay',
        createOrder: '/plane/plane/create',
        testBinary: '/ygw/api/dispatch/test/demo'
      },
      // baseURL: 'https://api.yuecard.net'
      baseURL: 'http://app.e.uban360.net',
      bindSentry: sentry
    })

    // console.log(this.http)
    this.http.inject('get', 'getInfo', '/gateway/getInfo')({ name: 1 })
    // axios.get('http://app.e.uban360.net/gateway/common/app', {
    //   headers: {
    //     'Cookie': 'token=20273a7a72a5e3b7a136d44bd14966e8; timestamp=1534904984376; uid=3;'
    //   }
    // })
    // this.http.get('bizInfo', { bizType: 0, toast: true }).then(res => {
    //   console.log('success', res)
    // }).catch(res => {
    //   console.log('error', res)
    // })
    // eslint-disable-next-line
    // const str = ["name",[1,2,3],{"osInfo":"osInfo","osType":"1","deviceId":"deviceId","version":"version","cardNo":"9001180800100001"}]
    // this.http.postBinary('testBinary', str)
  }
}
</script>

<style scoped>

</style>
