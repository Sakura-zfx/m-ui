<template>
  <common-entry title="头像">
    <avatar
      :avatar-url="avatarUrl"
      :user="{ name, uid }"
      :is-block="true"
      :radius="10"
    />
    <pre>
      import { avatar } from 'xm-mui'
    </pre>
    <p>props</p>
    <pre>
      props: {
        size: {
          type: String,
          default: 's60' // s36
        },
        user: {
          type: Object,
          default() {
            return {}
          }
        },
        avatarUrl: {
          type: String,
          required: true
        },
        isBlock: Boolean,
        radius: {
          type: Number,
          default: 6
        }
      }
    </pre>

    <p>usage</p>
    <pre>
      &lt;avatar
        :avatar-url="avatarUrl"
        :user="{ name, uid }"
      /&gt;
    </pre>
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import Avatar from '../../src/components/avatar'

export default {
  name: 't-avatar',

  data() {
    return {
      avatarUrl: '',
      name: 'jmingzi',
      uid: 269840
    }
  },

  components: {
    CommonEntry, Avatar
  }
}
</script>

<style scoped>

</style>
