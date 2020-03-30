<template>
  <div>
    <h1 class="heading">Movie List</h1>
    <div v-for="movie in movies" :key="movie.id" class="movie-wraper">
      <p>Title: {{ movie.title }}</p>
      <p>Director: {{ movie.director }}</p>
      <p>Genre: {{ movie.genre }}</p>
      <b-button pill variant="outline-secondary" @click="selectedMovie(movie)">Select</b-button>
      <hr />
    </div>
    <hr />
  </div>
</template>
<script>
export default {
  name: "MoviesList",
  props: {
    movies: {
      type: [Object, Array],
      required: true
    },
    selectedMovie: {
      type: Function,
      required: true
    }
  }
};
</script>

<style>
.movie-wraper {
  margin-top: 30px;
  font-size: 20px;
}
.heading {
  margin-top: 10px;
}
</style>