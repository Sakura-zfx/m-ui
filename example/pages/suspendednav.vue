<template>
  <common-entry title="悬浮导航">
    <suspended-nav
      :redirect="redirect"
    />

    <back-top />
  </common-entry>
</template>

<script>
import CommonEntry from './commonEntry'
import SuspendedNav from '../../src/components/suspended-nav'
import BackTop from '../../src/components/back-top'

export default {
  name: 't-avatar',

  data() {
    return {
    }
  },

  methods: {
    redirect(openUrl, handle, type) {
    }
  },

  components: {
    CommonEntry,
    SuspendedNav,
    BackTop
  }
}
</script>

<style scoped>

</style>
