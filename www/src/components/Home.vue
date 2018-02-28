<template>
  <div class="home container-fluid">
    <div class="row">
      <form class="col-sm-12" @submit.prevent="movieSearch">
        <input type="text" placeholder="Search Movie Title" v-model="title">
        <button type="submit">Search Movie Revues</button>
      </form>
    </div>
    <div class="row">
      <!-- search results col-sm-6 -->
      <Results class="col-sm-12"></Results>
      <!-- search details col-sm-6 -->

    </div>
  </div>
</template>

<script>
  import Results from './Results.vue'
  export default {
    name: 'home',
    data() {
      return {
        title: ''
      }
    },
    methods: {
      movieSearch() {
        this.$store.dispatch('getMovies', this.title)
      }
    },
    components: {
      Results: results
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>