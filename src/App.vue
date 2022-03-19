<template>
  <v-app>
    <AppTopBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from './components/shared/AppTopBar.vue';
export default {
  name: 'App',
  components: {
    AppTopBar
  },
};
</script>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #01579B;
    text-decoration: none;

    &.router-link-exact-active {
      color: #B71C1C;
    }
  }
}
</style>
