<template>
  <v-container class="noticias">
    <div class="titulo-da-pagina">
      <h2>Fique atento!</h2>
      <h3 class="texto3">Confira algumas das últimas notícias mais acessadas:</h3>
    </div>
    <ListaNoticias />
  </v-container>
</template>

<script>
import ListaNoticias from '../components/ListaNoticias.vue'

export default {
  name: 'FiqueATento',
  components: {
    ListaNoticias
  }
}

</script>

<style scoped>
.noticias {
  margin-top: 5%;
  margin-bottom: 5%;
}

.texto3{
  margin-bottom: 10px;
}

</style>


