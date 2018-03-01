<template>
  <div class="results container-flex">
    <div class="row">
      <div class="col-sm-6">
        <ol class="search" v-if="deactivateSearch">
          <h4>Search Results:</h4>
          <li class="d-flex justify-content-between" v-for="movie in movies">
              <a @click="showDetails(movie)">
                {{movie.title}}
              </a>
              <button type="submit" @click="addMovie(movie)">Add to Watchlist</button>
            </li>
        </ol>
        <ol v-else>
          <h4>My Watchlist:</h4>
          <li v-for="movie in watchlists">
            <a @click="showDetails(movie)">
              {{movie.title}}
            </a>
            <button type="submit" @click="removeMovie(movie)">Remove Movie</button>
          </li>
        </ol>
      </div>
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
      addMovie(movie) {
        let watchlists = this.$store.state.watchlists
        for (var i = 0; i < watchlists.length; i++) {
          var myMovie = this.$store.state.watchlists[i]
          if (myMovie.overview == movie.overview) {
            return alert(movie.title + " is already on your watchlist")
          }
        }
        this.$store.dispatch('addMovie', movie)
      },
      deactivateSearch() {
        this.$store.dispatch('deactivateSearch', false)
      },
      removeMovie(movie) {
        this.$store.dispatch('removeMovie', movie)
      }
    },
    computed: {
      movies() {
        return this.$store.state.searchResults
      },
      activeMovie() {
        return this.$store.state.activeMovie
      },
      watchlists() {
        return this.$store.state.watchlists
      },
      deactivateSearch() {
        return this.$store.state.searchActive
      }
    },
    components: {
      detailz: Details
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .results {
    justify-content: space-between;
  }
</style>