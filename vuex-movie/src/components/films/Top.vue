<template>
  <v-layout wrap>
    <v-flex xs3 xs4 xs6 xs12 sm6 md3 lg3 xl4 v-for="film in films" :key="film.id" v-if="film.vote_average >= 6">
      <v-card class="mr-3 my-2">
        <v-img :src="`https://image.tmdb.org/t/p/h632/${film.poster_path}`"></v-img>
        <v-card-title>
          <div>
            <v-layout row>
              <v-flex><h3 class="subheading font-weight-bold text-uppercase text-style">{{film.title}}</h3></v-flex>
              <!-- <v-spacer></v-spacer> -->
             <v-flex><div class="rating">{{film.vote_average}}</div></v-flex>
            </v-layout>
            <div class="text-style my-1">
              <span v-for="genre in film.genre_ids" :key="genre"
                class="mr-1 light-blue--text text--accent-3">
                {{getGenreNameById(genre)}}
              </span>
            </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      films: this.$store.getters.getFilms,
      genres: this.$store.getters.getGenres,
      genreNameById: this.$store.getters.getGenreNameById
    }
  },
  // created() {
  //   this.getData();
  //   this.getGenre();
  // },
  // methods: {
  //   getData() {
  //       this.loading = true;
  //     const axios = require('axios');
  //     axios
  //       .get('https://mate-academy.github.io/vue-program/data/movierise-data.json')
  //       .then(res => {
  //         this.films = res.data.results;
  //         this.films.map(f => {
  //           return {
  //             id: f.id,
  //             title: f.title,
  //             poster_path: f.poster_path,
  //             backdrop_path: f.backdrop_path,
  //             vote_average: f.vote_average,
  //             release_date: f.release_date,
  //             genre_ids: f.genre_ids.splice(3)
  //           }
  //         });
  //       });
  //       this.loading = false;
  //   },
  //   getGenre() {
  //     const axios = require('axios');
  //     axios
  //       .get('https://mate-academy.github.io/vue-program/data/movierise-genres.json')
  //       .then(res => {
  //         this.genres = res.data.genres;
  //         this.genres.map(g => {
  //           return {
  //             id: g.id,
  //             name: g.name
  //           }
  //         });
  //       });
  //   },
  //   // genreFilm() {
  //   //   console.log(this.items);
  //   //   console.log(this.genres);
  //   //   this.items.map(i => {
  //   //     i.genre_ids.find(f => {
  //   //       if(f === this.genres.find(g => g.id)) 
  //   //       return {
  //   //         id: f.id,
  //   //         name: g.name
  //   //       }
  //   //     });
  //   //   });
  //   // },
  //   getGenreNameById(genre) {
  //     let genreName = "";
  //     this.genres.map(g => {
  //         if(g.id === genre)
  //           genreName = g.name;
  //     });
  //     return genreName;
  //   }
  // }
}
</script>

<style>
 .text-style {
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   width: 50%;
 }
 .rating {
   border: 1px solid #00B0FF;
   border-radius: 3px;
   width: 25px;
   height: 18px;
   text-align: center;
   font-weight: bold;
 }
</style>
