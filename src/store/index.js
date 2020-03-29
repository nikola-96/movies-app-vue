import Vue from 'vue'
import Vuex from 'vuex'
import moviesService from '../services/MovieService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    }
  },
  actions: {
    async loadMovies({ commit }) {
      const movies = await moviesService.getAll();
      commit('SET_MOVIES', movies);
    }
  },
  modules: {
  }
})
