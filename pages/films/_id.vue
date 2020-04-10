<template>
    <div id="pageFilm">
        <div class="dates">
            <span>Server date: {{ date }}</span>
            <ShowClientDate class="clientDate"/>
        </div>
        <Film :film="film"/>
    </div>
</template>
<style lang="scss">
   #pageFilm {
       h5 {
           margin-bottom: 20px;
       }
   }
</style>
<script>
  import Film from '~/components/Film.vue';
  import ShowClientDate from '~/components/ShowClientDate.vue';
  import api from '~/lib/api';

  export default {
    components: {
      Film,
      ShowClientDate
    },
    async asyncData ({ params }) {
      const date = new Date().toLocaleTimeString();
      const film = await api.getMovie(params.id);
      console.log(film);
      return {
        date,
        film,
        title: `${ film.title }`,
        description: `Ficha de la película ${ film.title }`,
      }
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: this.description }
        ]
      }
    },
  }
</script>
