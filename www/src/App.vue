<template>
  <div id="app">
    <h1>Mo<img class="title" src="./assets/logo.png">ie Re<img class="title" src="./assets/logo.png">ues</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    this.$store.dispatch('getWatchlist')
  }
}
</script>

<style>
.title {
  height: 30px;

}
</style>
