<template>
  <div class="app-top-bar">
    <v-app-bar color="#01579B" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="pl-0">Menu</v-toolbar-title>
  <v-spacer></v-spacer>

  <v-switch class="mt-6"
    :value="darkMode"
    @change="toggleDarkMode">
  </v-switch>
  <v-list-item-icon>
    <v-icon size="20">mdi-brightness-6</v-icon>
  </v-list-item-icon>

    <v-menu left bottom></v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="blue darken-4--text--accent-3">

          <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/listaverificacao">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-text-box-check-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Lista de Sites</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/fiqueatento">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-alert-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Fique Atento</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/sugestoesusuario">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-send-clock-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sugestões</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/sobrenos">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sobre Nós</v-list-item-title>
          </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'AppTopBar',
  data: () => ({
    darkMode: false,
    drawer: false,
    group: null,
  }),
  methods: {
    toggleDarkMode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.darkMode = !this.darkMode;
    }
  },
};
</script>

<style scoped>
  .app-top-bar a{
    text-decoration: none;
  }

  .v-list-item-group .v-list-item--active{
    color: white;
  }
</style>