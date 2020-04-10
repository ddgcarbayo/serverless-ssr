<template>
  <div>
    <div class="dates">
      <span>Server date: {{ date }}</span>
      <ShowClientDate class="clientDate"/>
    </div>
    <FilmsList v-on:more="moreFilms()" :films="films"/>
  </div>
</template>
<style lang="scss">
  .dates {
    width: 100%;
    float: left;
    margin-bottom: 20px;
    span {
      float: left;
      font-weight: bold;
    }
    .clientDate {
      float: right;
    }
  }
</style>
<script>
import ShowClientDate from '~/components/ShowClientDate.vue';
import FilmsList from '~/components/FilmsList.vue';
import api from '~/lib/api';

export default {
  components: {
    ShowClientDate,
    FilmsList,
  },
  data() {
    return {
      films: [],
      page: 1,
    }
  },
  methods: {
    async moreFilms() {
      this.page++;
      const page = this.page;
      const films = await api.getMovies(page);
      this.films.push(...films);
    },
  },
  async asyncData ({ params }) {
    const date = new Date().toLocaleTimeString();
    const films = await api.getMovies();
    return {
      date,
      films,
      title: `Prueba ${ date }`
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: `Descripción dinámica ${ this.date }` }
      ]
    }
  },
}
</script>
