<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title id="logo">
        <nuxt-link to="/">
          <img :src="logo">
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content id="appWrapper">
      <nuxt/>
    </v-content>
    <v-footer app>
      <span class="px-4">BBVA Next Technologies &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<style lang="scss">
  #logo {
    img {
      height: 44px;
      margin-top: 10px;
    }
  }

  #appWrapper {
    margin: 30px;
  }

</style>
<script>
  import logo from '@/assets/next.png';
  export default {
    data() {
      return {
        logo,
      }
    }
  }
</script>
