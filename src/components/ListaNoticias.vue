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
          {{ noticia.titulo }}
        </v-card-title>
      </v-img>
      <v-card-subtitle
        class="pb-0"
      >
        <strong> &#10005; Falso</strong>
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
          :href="noticia.link"
          target="_blank"
        >
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
        imagemURL: 'https://www.e-farsas.com/wp-content/uploads/flor_marte.jpg',
        titulo: 'A sonda Curiosity encontrou uma flor em Marte?',
        resumo: 'No dia 24 de fevereiro de 2022, a câmera MAHLI da sonda Curiosity fotografou uma formação esquisita no solo de Marte, uma coisa que parece um coral ou uma “planta de pedra” e isso alimentou inúmeras teorias a respeito da existência de vida fora da Terra. A verdade mesmo é que, infelizmente, não se trata de um ser vivo e tampouco de um vegetal fossilizado! A apelidada “Blackthorn Salt” (algo como “sal de espinheiro”, em inglês) é apenas uma estrutura chamada cristalina diagenética, formada pela sedimentação de minerais em reação à presença da água.',
        link: 'https://www.e-farsas.com/a-sonda-curiosity-encontrou-uma-flor-em-marte.html',
      },
      {
        id: 2,
        imagemURL: 'https://www.e-farsas.com/wp-content/uploads/morto_revive-1068x704.jpg',
        titulo: 'Homem dado como morto pela COVID em Parauapebas ressuscita no necrotério! Será verdade?',
        resumo: 'A primeira vez que esse vídeo surgiu nas redes sociais foi no final de janeiro de 2022 e, na ocasião, o caso teria ocorrido no centro da cidade russa de Tver. Acontece que tudo não passou de um vazamento dos bastidores das gravações de uma série russa de comédia chamada “И снова здравствуйте!” (ou Olá de Novo, em russo). Estrelada por Andrei Merzlikin, a série gira em torno de um gângster que decide mudar de vida e abrir uma confeitaria. Só que ele acaba morrendo antes de realizar seu desejo, revivendo pouco tempo depois de morto.',
        link: 'https://www.e-farsas.com/homem-dado-como-morto-pela-covid-em-parauapebas-ressuscita-no-necroterio-sera-verdade.html',
      },
      ],
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