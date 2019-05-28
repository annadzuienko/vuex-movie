<template>
    <v-layout>
    <v-flex>
      <v-card>
        <v-img height="80%"
          class="white--text"
          :src="`https://image.tmdb.org/t/p/h632/${films[8].backdrop_path}`"
          aspect-ratio="2.5">
          <v-layout column>
              <v-flex>
                <h2 class="headline text-uppercase ma-5">Movierise</h2>
              </v-flex>
              <v-flex class="header-info mb-4">
                <h1 class="display-1 text-uppercase font-weight-bold mx-5 my-1">{{films[8].title}}</h1>
                <div class="text-style my-1 mx-5">
                    <span v-for="genre in films[8].genre_ids" :key="genre" class="mr-3 subheading">{{genreNameById(genre)}}</span>
                </div>
                <v-layout wrap align-center class="mt-5">
                    <v-flex>
                        <v-layout row align-center class="ml-5">
                            <v-icon class="mr-2" color="light-blue accent-3">star</v-icon>
                            <v-icon class="mr-2" color="light-blue accent-3">star</v-icon>
                            <v-icon class="mr-2" color="light-blue accent-3">star</v-icon>
                            <v-icon class="mr-2" color="light-blue accent-3">star</v-icon>
                            <v-icon class="mr-2" color="light-blue accent-3">star</v-icon>
                            <div class="rating">{{films[8].vote_average}}</div>
                        </v-layout>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <v-flex xs4>
                        <v-btn class="white--text font-weight-bold" color="light-blue darken-1">Watch now</v-btn>
                        <v-btn flat outline color="white">View info</v-btn>
                    </v-flex>
                </v-layout>
              </v-flex>
          </v-layout>
        </v-img>
      </v-card>
    </v-flex>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            films: this.$store.getters.getFilms,
            genres: this.$store.getters.getGenres,
            genreNameById: this.$store.getters.getGenreNameById,
            mainFilm: {}
        }
    },
    methods: {
        // getTypeNameById(type) {
        //     this.types.map(t => {
        //         if(t.id === type)
        //             this.typeName = t.name;
        //     });
        //     return this.typeName;
        // },
        getProps(){
            this.mainFilm = {
                poster: this.films[8].backdrop_path,
                title: this.films[8].title,
                vote: this.films[8].vote_average
            };
        }
    }
}
</script>
<style>
.header-info {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>

