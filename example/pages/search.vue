<template>
  <div class="bg-fff">
    <search
      :is-open="isOpen"
      @on-click="onClick"
      @on-search="onSearch"
      value="1212"
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
