//main store file

import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

vue.use(vuex)

let movieDB = axios.create({
  baseURL: '', // base url with our own API key
  timeout: 2000
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

