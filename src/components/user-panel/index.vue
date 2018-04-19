<template>
  <div
    class="user-panel px-margin-10 px-height-100 bg-fff radius-4"
    :class="userPanelCls"
  >
    <div class="user-info-con">
      <div class="fl px-margin-r15 avatar__wrap overflow-h">
        <avatar
          :avatar-url="avatarUrl"
          :user="{ name, uid }"
        />
      </div>
      <div class="overflow-h color-fff">
        <p class="px-font-18">{{ name }}</p>
        <p class="px-font-16 px-margin-t10">{{ orgName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '../avatar'

export default {
  name: 'user-panel',

  components: {
    Avatar
  },

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
}
</script>

<style lang="scss">
  .user-panel {
    background-image: linear-gradient(-124deg, #E1B960 0%, #EBCE8F 100%);
  }

  .avatar__wrap {
    border-radius: 30px;
    border: 2px solid #fff;
  }

  .user-info-con {
    padding: 20px 0 0 20px;
  }
</style>
