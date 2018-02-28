//main store file

import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router'

vue.use(vuex)

let movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie?api_key=0d0172cc59939db9455b137d854022cc&page=1&include_adult=false&query=", // base url with our own API key
  timeout: 3000
})

let watchlistDB = axios.create({
  baseURL: "//localhost:3000/",
  timeout: 3000
})


export default new vuex.Store({
state: {
  user: {
    name: "Trevor"
  },
  searchResults: [],
  activeMovie: {}
},
mutations: {
  addResults(state, payload){
    state.searchResults = payload
  },
  setActiveMovie(state, payload){
    // state.activeMovie = payload
    vue.set(state, 'activeMovie', payload)
  }
},
actions: {
  movieSearch({commit, dispatch}, title){
    movieDB.get(title)
    .then(res=>{
      commit('addResults', res.data.results)
    })
    .catch(err=>{
      console.error(err)
    })
  },
  setActiveMovie({commit, dispatch}, payload){
    commit('setActiveMovie', payload)
  }
}
})

