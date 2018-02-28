<template>
  <div class="results">
    <h4>Search Results:</h4>
    <ol>
      <li v-for="movie in movies">
        <a @click="showDetails(movie)">
          {{movie.title}}
        </a>
      </li>
    </ol>
    <Detailz class="col-sm-6" :movie="activeMovie"></Detailz>
  </div>
</template>

<script>
  import Details from './Details'
  export default {
    name: 'results',
    data() {
      return {
      }
    },
    methods: {
      showDetails(movie) {
        this.$store.dispatch('setActiveMovie', movie)
      }
    },
    computed: {
      movies() {
        return this.$store.state.searchResults
      },
      activeMovie(){
        return this.$store.state.activeMovie
      }
    },
  components:{
    Detailz: Details
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>