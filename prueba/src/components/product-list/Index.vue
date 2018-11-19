<template>
  <div>
    <list-component :items="items"></list-component>
    <div>PRUEBA: <button @click="probando">AQUI</button></div>
  </div>
</template>

<script>
// FIXME
let items = [
  {
    name: 'hola',
    price: 9.9,
    type: 1,
    id: 1
  },
  {
    name: 'adios',
    price: 6.9,
    type: 1,
    id: 2
  },
  {
    name: 'hola',
    price: 12.9,
    type: 2,
    id: 3
  }
]

import ListComponent from '../custom/ListComponent.vue'

export default {
  name: 'product-list-base',
  components: {
    ListComponent
  },
  data() {
    return {
      items
    }
  }, 
  methods: {
    probando() {
      window.location.href = "mailto:" + "alegongom1@gmail.com" + "?cc=" + "alegongom1@gmail.com" + "&subject=" + "pedido de parte de lo que seria $this.user.email/name" + "&body=" + "Necesito 5 bolsas de X";

    }
  }
}
</script>

