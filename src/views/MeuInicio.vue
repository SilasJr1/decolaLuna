<template>
  <div>
    <h1>Você sabe o que são fakenews?</h1>
    <spacer></spacer>
    <v-container>
      <p class="text-justify">
        O termo fakenews vem do inglês (fake (falso/falsa) e news (notícia)) e significa "notícia falsa".
      </p>
    </v-container>
    
    <v-container class="cards">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(passo,index) in passos" :key="passo.titulo">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <img 
                :src="require(`@/assets/${passo.imagem}`)"
                height="200px"
              />
            </v-responsive>
            <v-card-text>
              <div class="subheading font-weight-bold">
                {{passo.titulo}}
              </div>
              <div class="grey--text ">
                {{passo.subtitulo}}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-col>
                <v-col>
                <v-btn
                  icon
                  @click="IndexSelecionado=index"
                >
                  <v-icon>{{ index === IndexSelecionado ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  icon
                  @click="IndexSelecionado=index"
                >
                Entenda
                </v-btn>
              </v-col>
              
              </v-col>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="index === IndexSelecionado">
                <v-divider></v-divider>

                <v-card-text class="text-justify">
                  {{passo.texto}}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      show: false,
      IndexSelecionado: null,
      passos:[
        {titulo:'Cheque a fonte', subtitulo:'prefira fontes confiáveis', texto:'Muitos sites publicadores de fakenews têm nomes parecidos com endereços de sites de notícias. Portanto, avalie o endereço e verifique se o site é confiável, missão. Também veja se outros conteúdos do site também são duvidosos.', imagem:'source.png'},
        {titulo:'Preste atenção na data de publicação', subtitulo:'prefira notícias atuais', texto:'Veja se a notícia ainda é relevante e está atualizada.', imagem:'past.png'},
        {titulo:'Muitos erros de portuquês? Cuidado', subtitulo:'observe a escrita', texto:'Sites que divulgam fakenews costumam apresentar erros de português, de formatação, letras em caixa alta e uso exagerado de pontuação.', imagem:'spell-check.png'},
        {titulo:'Leia além do título', subtitulo:'manchetes podem ser enganosas', texto:'Leia a notícia até o fim. Muitas vezes, o título e o subtítulo não condizem com o texto.', imagem:'mobile-phone.png'},
        {titulo:'Pesquise em outros sites', subtitulo:'utilize mais de uma fonte', texto:'Duvide se você receber uma notícia bombástica que não esteja em outros sites de notícia.', imagem:'search-engine.png'},
        {titulo:'Será que foi piada?', subtitulo:'cuidado com sites de humor', texto:'Alguns sites de humor usam da ironia para fazer piada.', imagem:'laugh.png'},
        {titulo:'Cuidado ao compatilhar', subtitulo:'cautela ao compartilhar notícias', texto:'Não compartilhe conteúdo por impulso. Você é responsável pelo que você compartilha.', imagem:'social-media.png'},
      ]
    }
  },
  methods:{
    ExpandirCard(){
      this.show = !this.show;
    }
  }
  
}
</script>

<style scoped>

</style>