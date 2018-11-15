<template>

<div class="columns">

  <div class="column is-narrow">
    <menu-layout></menu-layout>
  </div>

  <div class="column">
    <div id="header">
      HEADER
    </div>

    <component :is="current"></component>

    <div id="footer">
      &copy; 2018 All rights reserved.
    </div>

  </div>

</div>
  
 
</template>

<script>

import MenuLayout from '@/components/Menu.vue'

export default {
  name: 'base-layout',
  components: {
    MenuLayout
  },
  computed: {
    current() {
      return this.$route.meta.current
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/index.scss";

  .is-narrow {
    width: 18rem;
  }
</style>
