<template>
  <div>
    <div>Filtros?</div>
    <div>productos</div>
    <div>PRUEBA: <button @click="probando">AQUI</button></div>
  </div>
</template>

<script>
export default {
  name: 'product-list-base',
  methods: {
    probando() {
      window.location.href = "mailto:" + "alegongom1@gmail.com" + "?cc=" + "alegongom1@gmail.com" + "&subject=" + "pedido de parte de lo que seria $this.user.email/name" + "&body=" + "Necesito 5 bolsas de X";

    }
  }
}
</script>

