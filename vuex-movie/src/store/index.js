import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
    state: {
      count: 0,
      toDos: [
        {id: 1, text: "learn Vuex", done: false},
        {id: 2, text: "learn how to create library Vue components", done: false},
      ],
      films: [],
      genres: []
    },
    // mutations: { //commit('')
    //     increment: (state, object) => state.count += object.amount,
    //     decrement: state => state.count--
    // },
    // actions: {
    //     increment(context) {
    //         context.commit('increment');
    //     }
    // },
    getters: {
        doneToDos: state => {
            return state.toDos.filter(toDo => toDo.done === true);
        },
        doneToDosCount: (state, getters) => {
            return getters.doneToDos.length;
        },
        getToDoById: state => id => {
            return state.toDos.find(toDo => toDo.id === id);
        },
        films: state => state.films
    },
    actions: {
        getFilms({commit, state}) {
            const axios = require('axios');
            axios
                .get('https://mate-academy.github.io/vue-program/data/movierise-data.json')
                .then(res => {
                    state.films = res.data.results;
                    state.films.map(f => {
                    return {
                        id: f.id,
                        title: f.title,
                        poster_path: f.poster_path,
                        backdrop_path: f.backdrop_path,
                        vote_average: f.vote_average,
                        release_date: f.release_date,
                        genre_ids: f.genre_ids.splice(3)
                    }
                });
            })
            .then(films => {
                commit('setFilms', state.films)
            });
        },
        // getGenres({commit, state}) {
        //     const axios = require('axios');
        //     axios
        //         .get('https://mate-academy.github.io/vue-program/data/movierise-genres.json')
        //         .then(res => {
        //             state.genres = res.data.genres;
        //             state.genres.map(g => {
        //             return {
        //                 id: g.id,
        //                 name: g.name
        //             }
        //         });
        //     });
        // },
        // getGenreNameById(state, genre) {
        //     const genreName = "";
        //     state.genres.map(g => {
        //         if(g.id === genre)
        //           genreName = g.name;
        //     });
        //     return genreName;
        // }
    },
    mutations: {
        setFilms (state, films) {
            state.films = films;
        }
    }
  });
