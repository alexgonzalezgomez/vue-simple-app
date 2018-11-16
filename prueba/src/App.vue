<template>
  <div id="app">
    <base-layout></base-layout>
  </div>
</template>

<script>

import BaseLayout from '@/layout/Base.vue'

export default {
  name: 'app',
  components: {
    BaseLayout
  },
  // FIXME VUE_HEAD
  // way to add base metatags
  // scripts, css...
  head: {
    script: [
      {
        type: 'text/javascript', src: 'https://use.fontawesome.com/releases/v5.3.1/js/all.js', async: true
      }
    ]
  }
}
</script>

<style lang="scss" scoped>

</style>
