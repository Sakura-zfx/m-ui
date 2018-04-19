<template>
  <common-entry title="个人面板">
    <m-user-panel
      avatar-url="http://filesystem.api.jituancaiyun.net/sfs/avatar?uid="
      uid="269840"
      name="ym"
      org-name="哈哈哈哈"
    />

    <p>props</p>
    <pre>
    props: {
      name: {
        type: String,
        default: ''
      },
      avatarUrl: {
        type: String,
        required: true,
        default: '//filesystem.api.jituancaiyun.net/sfs/avatar?uid='
      },
      orgName: {
        type: String,
        default: ''
      },
      uid: {
        type: [String, Number],
        default: 0
      },
      userPanelCls: String
    }
    </pre>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import MUserPanel from '../../src/components/user-panel'

export default {
  name: 'user-panel',

  components: {
    CommonEntry, MUserPanel
  }
}
</script>

<style scoped>

</style>
