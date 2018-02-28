<template>
  <div class="results">
    <h4>Search Results:</h4>
    <div class="row">
      <ol>
        <li v-for="movie in movies">
          <a @click="showDetails(movie)">
            {{movie.title}}
          </a>
        </li>
      </ol>
    </div>
    <detailz class="col-sm-6" :movie="activeMovie"></detailz>
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
      activeMovie() {
        return this.$store.state.activeMovie
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