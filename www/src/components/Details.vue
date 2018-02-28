<template>
  <div class="details">
    <h4>Details: </h4>
    {{movie.title}}
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