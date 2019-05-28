<template>
    <footer height="200" class="background-footer py-3">
          <v-layout wrap class="mx-5">
            <v-flex align-self-center>
              <v-layout row wrap align-content-center>
                  <div
                    v-for="(item, i) in items"
                    :key="i">
                    <span class="body-2 grey--text ml-2 mr-3">{{ item.title }}</span>
                </div>
              </v-layout>
            </v-flex>
            <v-flex align-self-center class="subheading text-uppercase light-blue--text text--accent-3 text-xs-center pl-3"><strong>Movie</strong>rise</v-flex>
            <v-flex align-self-center class="text-xs-right">
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-1 my-0"
                grey
                icon>
                <v-icon size="19px" color="grey">{{ icon }}</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-card-actions class="grey--text text--lighten-1 justify-center">
            &copy;2018 — <strong>Movierise</strong>
          </v-card-actions>
        </footer>
</template>

<script>
export default {
    data() {
        return {
            icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-google-plus',
                'fab fa-linkedin',
                'fab fa-instagram'
            ],
            items: [
                { title: 'About' },
                { title: 'Service' },
                { title: 'Contact' }
            ]
        }
    }
}
</script>

<style>
.background-footer {
  background: #fff;
}
</style>