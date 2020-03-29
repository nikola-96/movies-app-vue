<template>
  <div>
    <div v-for="movie in movies" :key="movie.id">{{ movie.title }}</div>
  </div>
</template>
<script>
export default {
  name: "MoviesList",
  mounted() {
    this.$store.dispatch("loadMovies");
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  }
};
</script>