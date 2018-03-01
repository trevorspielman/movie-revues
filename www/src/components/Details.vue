<template>
  <div class="details">
    <h4>Details: </h4>
    <h4>{{movie.title}}</h4>
    <p><strong>{{movie.release_date}}</strong></p>
    <p>{{movie.overview}}</p>
    <div v-if="movie.poster_path">
        <img :src="'https://image.tmdb.org/t/p/w500/'+ movie.poster_path">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'details',
    props: ['movie'],
    data() {
      return {
      }
    },
    methods: {
    },
    computed: {
    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>