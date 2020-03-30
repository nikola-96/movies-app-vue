<template>
  <b-container>
    <b-row>
      <b-col>
        <movie-list :movies="movies" :selectedMovie="handleSelectedMovie" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import MovieList from "../components/MoviesList";
export default {
  components: {
    MovieList
  },
  data() {
    return {
      selectedMovies: []
    };
  },
  mounted() {
    this.$store.dispatch("loadMovies");
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  methods: {
    handleSelectedMovie(movie) {
      if (this.selectedMovies.indexOf(movie.id) > -1) {
        return;
      }
      this.selectedMovies.push(movie.id);
      this.$store.state.moviesSelected++;
    }
  }
};
</script>