<template>
  <div class="bg-fff">
    <search
      :is-open="isOpen"
      :has-btn="false"
      @on-click="onClick"
      @on-search="onSearch"
    >
      <span>插槽</span>
    </search>
  </div>
</template>

<script>
import Search from '../../src/components/search'

export default {
  components: {
    Search
  },

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    onClick() {
      this.isOpen = true
      console.log('click')
    },
    onSearch(con) {
      console.log(con)
    }
  }
}
</script>
