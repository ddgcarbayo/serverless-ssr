<template>
    <v-card class="mx-auto listFilmItem">
        <v-img class="white--text align-end" height="400px" :src="`https://image.tmdb.org/t/p/w185${ film.poster_path }`">
            <v-card-title>{{ film.title }}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">#{{ position }}</v-card-subtitle>
        <v-card-text class="text--primary module fade">
            <p>{{ film.overview }}</p>
        </v-card-text>
        <v-card-actions>
            <v-btn color="orange" text :to="`/films/${ film.id }`" nuxt>
                Ampliar
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<style lang="scss">
    .listFilmItem {
        --lh: 1.4rem;
        line-height: var(--lh);
        .module {
            width: 100%;
            margin: 0;
            overflow: hidden;
            height: 62px !important;
        }
        .module p {
            margin: 0;
        }
        .fade {
            position: relative;
            height: 3.6em; /* exactly three lines */
        }
        .fade:after {
            content: "";
            text-align: right;
            position: absolute;
            bottom: 0;
            right: 0;
            width: 70%;
            height: 1.2em;
            background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
        }
    }
</style>
<script>
  export default {
    props: ['film', 'position'],
  }
</script>
