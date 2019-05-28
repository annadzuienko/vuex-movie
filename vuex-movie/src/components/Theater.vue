<template>
    <div class="background-app">
        <!-- <Header :items="films" :types="genres"></Header> -->
        <v-layout column class="mx-5 my-2">
          <v-flex>
            <Film></Film>
          </v-flex>
        </v-layout>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './Header.vue';
import Film from './Film.vue';
import Footer from './Footer.vue';

export default {
    components: {
      Header,
      Film,
      Footer
    },
    data () {
    return {
      films: [],
      genres: [],
      genreName: ""
    }
  },
  created() {
    this.getFilms();
    this.getGenres();
  },
  methods: {
    getFilms() {
      const axios = require('axios');
      axios
        .get('https://mate-academy.github.io/vue-program/data/movierise-data.json')
        .then(res => {
          this.films = res.data.results;
          this.films.map(f => {
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
        });
    },
    getGenres() {
      const axios = require('axios');
      axios
        .get('https://mate-academy.github.io/vue-program/data/movierise-genres.json')
        .then(res => {
          this.genres = res.data.genres;
          this.genres.map(g => {
            return {
              id: g.id,
              name: g.name
            }
          });
        });
    },
    // genreFilm() {
    //   console.log(this.items);
    //   console.log(this.genres);
    //   this.items.map(i => {
    //     i.genre_ids.find(f => {
    //       if(f === this.genres.find(g => g.id)) 
    //       return {
    //         id: f.id,
    //         name: g.name
    //       }
    //     });
    //   });
    // },
    getGenreNameById(genre) {
      this.genres.map(g => {
          if(g.id === genre)
            this.genreName = g.name;
      });
      return this.genreName;
    }
  }
}
</script>

<style>
.link {
  height: 30px;
  text-align: center;
  padding: 5px 0;
}
.link:hover {
  font-weight: bold;
  border-bottom: 2px solid #00B0FF;
}
.background-app {
  background: #EEEEEE;
}
</style>
