<template>
  <div id="app">
    <nav>
      <router-link to="/">Início</router-link>
      <router-link to="/sobrenos">Sobre Nós</router-link>
      <router-link to="/lista-verificacao">Lista de Sites para Verificação</router-link>
      <router-link to="/fique-atento">Fique Atento</router-link>
      <router-link to="/sugestoes-usuarios">Sugestões Usuários</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
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
