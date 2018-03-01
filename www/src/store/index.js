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
    watchlists: [],
    searchActive: true
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
    },
    myWatchlist(state, payload) {
      state.searchResults = state.watchlists
    },
    setMyWatchlist(state, payload){
      state.watchlists = payload
    },
    deactivateSearch(state, payload){
      state.searchActive = payload
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
      watchlistDB.post('watchlists', payload)
        .then(res => {
          commit('addMovie', res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    myWatchlist({ commit, dispatch }) {
      commit('myWatchlist')
    },
    getWatchlist({ commit, dispatch }) {
      watchlistDB.get('watchlists')
        .then(res => {
          commit('setMyWatchlist', res.data)
          console.log(res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    deactivateSearch({commit, dispatch}, payload){
      commit('deactivateSearch', payload)
    },
    removeMovie({ commit, dispatch }, payload) {
      watchlistDB.delete('watchlists/' + payload._id)
        .then(res => {
          dispatch('getWatchlist')
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
})

