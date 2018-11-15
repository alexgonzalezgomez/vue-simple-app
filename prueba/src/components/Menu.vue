<template>
  <div>
    <router-link :to="{path: '/', name: 'home'}" class="link overflow-text">Inicio</router-link>
    <router-link :to="{path: '/hhhh', name: 'hhhh'}" class="link overflow-text">Lista</router-link>
  </div>
</template>
<script>
export default {
  name: 'menu-layout'
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/index.scss";

  .link {
    // background-color: lighten($main-blue, 30);
    background-color: black;
    color: $main-white;
    width: calc(100% - 3rem);
    height: 3rem;
    display: block;
    position: relative;
    &:after {
      position: absolute;
      width: 3rem;
      height: 3rem;
      right: -3rem;
      content: '·'
    }
    &:hover + &:after {
      color: red;
    }
  }
</style>

