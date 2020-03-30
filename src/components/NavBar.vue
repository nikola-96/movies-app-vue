<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/movies">Movies</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
          <b-nav-item>Numbers of selected movies: {{ getMoviesSelected }}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <movie-search />
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import MovieSearch from "../components/MovieSearch";
export default {
  name: "NavBar",
  components: {
    MovieSearch
  },
  data() {
    return {
      movieSearch: ""
    };
  },
  methods: {
    handleSearch() {
      console.log(this.movieSearch);
    }
  },
  computed: {
    getMoviesSelected() {
      return this.$store.state.moviesSelected;
    }
  }
};
</script>