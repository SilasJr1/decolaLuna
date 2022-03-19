<template>
  <div id="noticias">
    <v-card
      class="mx-auto noticia-card"
      max-width="400"
      v-for="noticia in listaDeNoticias" :key="noticia.id"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="noticia.imagemURL"
      >
        <v-card-title>
          <!-- TÍTULO DA MANCHETE -->
          {{ noticia.titulo }}
        </v-card-title>
      </v-img>
      <v-card-subtitle
        class="pb-0"
        v-if="noticia.realOuFalso === 'FALSO'"
        color="#B71C1C"
      >
        <!-- É FATO OU FAKE - ÍCONE DE CHECK OU X -->
        &#10005;
        {{ noticia.realOuFalso }}
      </v-card-subtitle>
      <v-card-subtitle
        color="#1B5E20" 
        class="pb-0"
        v-else
      >
        <!-- É FATO OU FAKE - ÍCONE DE CHECK OU X -->
        &#10005;
        {{ noticia.realOuFalso }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>
          <!-- RESUMO -->
          {{ noticia.resumo }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          text
          a
          href="noticia.link"
          target="_blank"
        >
        <!-- LINK PARA A MATÉRIA -->
          LER MATÉRIA COMPLETA
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ListaNoticias',
  data() {
    return {
      listaDeNoticias: [{
        id: 1,
        imagemURL: 'https://img.olhardigital.com.br/wp-content/uploads/2018/09/20180903133856-860x450.jpg',
        titulo: 'É #FAKE que EUA admitiram ter laboratórios de armas biológicas na Ucrânia em 2022',
        data: '01/02/2022',
        realOuFalso: 'REAL',
        icone: 'U+02715',
        resumo: 'Lorem Ips',
        link: 'https://www.toptal.com/designers/htmlarrows/symbols/ballot-box-with-x/',
      },
      {
        id: 2,
        imagemURL: 'https://img.olhardigital.com.br/wp-content/uploads/2018/09/20180903133856-860x450.jpg',
        titulo: 'É #FAKE que EUA admitiram ter laboratórios de armas biológicas na Ucrânia em 2022',
        data: '01/02/2022',
        realOuFalso: 'FALSO',
        icone: '&#10003;',
        resumo: 'Lorem Ips fbakujfdsk anfhuifhsigb aofgihbnzidgfbsigb anbfkiugbfsifb andfdhbngfksjb abnfujbf',
        link: 'https://www.toptal.com/designers/htmlarrows/symbols/ballot-box-with-x/',
      },
      { id: 3,
        imagemURL: 'https://img.olhardigital.com.br/wp-content/uploads/2018/09/20180903133856-860x450.jpg',
        titulo: 'É #FAKE que EUA admitiram ter laboratórios de armas biológicas na Ucrânia em 2022',
        data: '01/02/2022',
        realOuFalso: 'FALSO',
        icone: 'outro;',
        resumo: 'Lorem Ips',
        link: 'https://www.toptal.com/designers/htmlarrows/symbols/ballot-box-with-x/',
      }],
    }
  }
}

</script>

<style scoped>
.noticia-card {
  margin-bottom: 1%;
}
.v-card__text {
  text-align: justify;
  font-size: 0.95rem;
}

</style>