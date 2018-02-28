<template>
  <div class="results">
    <h4>Search Results:</h4>
    <div class="row">
      <ol>
        <li v-for="movie in movies">
          <a @click="showDetails(movie)">
            {{movie.title}}
          </a>
          <button type="submit" @click="addMovie(movie)">Add to Watchlist</button>
        </li>
      </ol>
      <detailz class="col-sm-6" :movie="activeMovie"></detailz>
    </div>
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
      },
      addMovie(movie){
        this.$store.dispatch('addMovie', movie)
      }
    },
    computed: {
      movies() {
        return this.$store.state.searchResults
      },
      activeMovie() {
        return this.$store.state.activeMovie
      },
      watchlists(){
        return this.$store.state.watchlists
      }
    },
    components: {
      detailz: Details
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>