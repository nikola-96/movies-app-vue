<template>
  <div>
    <h1 class="heading">Movie List</h1>
    <div v-for="movie in movies" :key="movie.id" class="movie-wraper">
      <p>Title: {{ movie.title }}</p>
      <p>Director: {{ movie.director }}</p>
      <p>Genre: {{ movie.genre }}</p>
      <hr />
    </div>
    <hr />
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

<style>
.movie-wraper {
  margin-top: 50px;
}
.heading {
  margin-top: 10px;
}
</style>