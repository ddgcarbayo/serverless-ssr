<template>
    <div id="filmsList" v-if="films">
        <h3>Películas con mejor ranking</h3>
        <v-row>
            <v-col cols="3" v-for="(film, k) in films" :key="film.id" >
                <FilmListItem :film="film" :position="(k+1)"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="text-center">
                <v-btn class="more" @click="more()">Siguientes</v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<style lang="scss">
    #filmsList {
        width: 100%;
        display: block;
        .more {
            display: inline-block;
        }
    }
</style>
<script>
  import FilmListItem from '~/components/FilmListItem.vue';

  export default {
    components: {
      FilmListItem,
    },
    props: ['films'],
    methods: {
      more() {
        this.$emit('more');
      },
    },
  }
</script>
