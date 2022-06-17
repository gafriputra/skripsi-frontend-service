<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
export default {
  name: "App",
  mounted(){
    let keranjang = localStorage.getItem("keranjang");
    if (keranjang){
      try{
        this.$store.dispatch('getKeranjang', JSON.parse(keranjang));
      }
      catch(e){
        localStorage.removeItem("keranjang");
      }
    }
  }
}
</script>