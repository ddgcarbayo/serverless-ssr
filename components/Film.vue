<template>
    <div class="pageFilmItem">
        <v-card class="mx-auto" v-if="film" width="600">
            <v-card-title>
                <h1>{{ film.title }}</h1>
            </v-card-title>
            <v-card-subtitle class="pb-0">
                <h2>{{ film.tagline }}</h2>
            </v-card-subtitle>
            <v-img :contain="true" class="white--text align-end" height="400px" :src="`https://image.tmdb.org/t/p/w185${ film.poster_path }`"></v-img>
            <v-card-text class="text--primary">
                <v-chip class="ma-2" color="indigo" text-color="white" v-for="tag in film.genres" :key="tag.id">
                    {{ tag.name }}
                </v-chip>
                <div class="overview">
                    {{ film.overview }}
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>
<style lang="scss">
    .pageFilmItem {
        .overview {
            display: block;
            margin-top: 20px;
        }
        h1 {
            margin-bottom: 20px;
        }
        h2 {
            margin-bottom: 30px;
        }
    }
</style>
<script>
  export default {
    props: ['film'],
    mounted() {
      console.log(this.film);
    }
  }
</script>
