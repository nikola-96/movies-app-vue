<template>
  <b-container>
    <b-row>
      <b-col>
        <movie-list />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import MovieList from "../components/MoviesList";
export default {
  components: {
    MovieList
  }
};
</script>