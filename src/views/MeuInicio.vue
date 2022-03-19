<template>
  <div>
      <h1 class="text-h5 text-left mb-3 mt-5 text-center"><strong>Você sabe o que são Fake News?</strong></h1>
    
    <v-container>
      <p class="text-justify">
        O termo "Fake News" vem do inglês — fake (falso/falsa) e news (notícia) — e significa "notícia falsa". 
        Na prática,  são boatos, rumores ou notícias imprecisas publicadas geralmente na internet. 
        Esse tipo de conteúdo contribui para a proliferação de mentiras na sociedade, podendo ter sérias consequências.
      </p>
      <p class="text-justify">Abaixo estão alguma dicas para se prevenir e evitar sair espalhando fake news por aí.</p>
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
              <h2 class="subheading font-weight-bold">
                {{passo.titulo}}
              </h2>
              <div class="grey--text">
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
              </v-col>
              
              </v-col>
            </v-card-actions>

            <v-expand-transition>
              <div  v-show="index === IndexSelecionado">
                <v-divider></v-divider>

                <v-card-text class="text-justify">
                  {{passo.texto}}
                </v-card-text>

                <v-btn
                  icon
                  @click="IndexSelecionado=null"
                >
                Entendi
                </v-btn>
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
        {titulo:'Cheque a fonte', subtitulo:'Prefira fontes confiáveis', texto:'Muitos sites publicadores de fake news têm nomes parecidos com endereços de sites de notícias. Portanto, avalie o endereço e verifique se o site é confiável. Também veja se outros conteúdos do site também são duvidosos.', imagem:'source.png'},
        {titulo:'Preste atenção na data de publicação', subtitulo:'Dê preferencia a notícias atuais', texto:'Veja se a notícia ainda é relevante e está atualizada.', imagem:'past.png'},
        {titulo:'Muitos erros de portuquês? Cuidado', subtitulo:'Observe a escrita', texto:'Sites que divulgam fake news costumam apresentar erros de português, de formatação, letras em caixa alta e uso exagerado de pontuação.', imagem:'spell-check.png'},
        {titulo:'Leia além do título', subtitulo:'Manchetes podem ser enganosas', texto:'Leia a notícia até o fim. Muitas vezes, o título e o subtítulo não condizem com o texto.', imagem:'mobile-phone.png'},
        {titulo:'Pesquise em outros sites', subtitulo:'Utilize mais de uma fonte', texto:'Duvide se você receber uma notícia bombástica que não esteja em outros sites de notícia.', imagem:'search-engine.png'},
        {titulo:'Será que foi piada?', subtitulo:'Cuidado com sites de humor', texto:'Alguns sites de humor usam da ironia para fazer piada.', imagem:'laugh.png'},
        {titulo:'Cuidado ao compatilhar', subtitulo:'Cautela ao compartilhar notícias', texto:'Não compartilhe conteúdo por impulso. Você é responsável pelo que você compartilha.', imagem:'social-media.png'},
      ]
    }
  }
  
}
</script>

<style scoped>

</style>