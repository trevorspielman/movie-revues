//main store file

import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router'

vue.use(vuex)

let movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie?api_key=0d0172cc59939db9455b137d854022cc&page=1&include_adult=false&query=", // base url with our own API key
  timeout: 30000,

})

let watchlistDB = axios.create({
  baseURL: "//localhost:3000/api/",
  timeout: 3000,
  withCredentials: true
})


export default new vuex.Store({
  state: {
    user: {
      name: "Trevor"
    },
    searchResults: [],
    activeMovie: {},
    watchlists: []
  },
  mutations: {
    addResults(state, payload) {
      state.searchResults = payload
    },
    setActiveMovie(state, payload) {
      // state.activeMovie = payload
      vue.set(state, 'activeMovie', payload)
    },
    addMovie(state, payload) {
      state.watchlists.push(payload)
      console.log("Thisis the mutation:", payload)
    }
  },
  actions: {
    movieSearch({ commit, dispatch }, title) {
      movieDB.get(title)
        .then(res => {
          commit('addResults', res.data.results)
        })
        .catch(err => {
          console.error(err)
        })
    },
    setActiveMovie({ commit, dispatch }, payload) {
      commit('setActiveMovie', payload)
    },
    addMovie({ commit, dispatch }, payload) {
      console.log("in the store:", payload)
      debugger
      watchlistDB.post('watchlists', payload)
        .then(res => {
          console.log("then:", payload)
          debugger
          commit('addMovie', res.data)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
})

