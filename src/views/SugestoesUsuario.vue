<template>
  
  <div class="CadastroSugestao">
    <h1 class="text-h5 text-left mb-3 mt-5">Ficou em dúvida se alguma notícia é fato ou fake? <br> Pergunte pra gente!</h1>
      <!--h2 class="text-h5 text-center mb-3 mt-5">Cadastro</h2-->
        <v-form class="registro-box" ref="form" >

                      <p>Nome</p>
                      <v-text-field v-model="nome" label="Fulano de Tal" required>
                      </v-text-field>

                      <p>E-mail para contato</p>
                      <v-text-field v-model="email" label="E-mail" required>
                      </v-text-field>

                      <p>Como você teve acesso a essa informação?</p>
                      <v-text-field v-model="referencia" label="WhatsApp, Facebook ou outros" required> 
                        <!--quando clica na label, o texto fica com uma margem, diferente das labels de nome e e-mail-->
                      </v-text-field>

                      <p>Diga a notícia que você está em dúvida</p>
                      <v-text-field v-model="noticia" label="" required>
                        <!--quando clica na label, o texto fica com uma margem, diferente das labels de nome e e-mail-->
                      </v-text-field>
            
      </v-form>  
      
        <div class="botoes">
                          <v-btn
                              class="botaoLimpar"
                              color="teal lighten-1"
                              elevation="2"
                              medium
                              outlined
                              rounded
                              @click="limpar"
                          >
                              Limpar
                          </v-btn> 
                          <v-btn @click="push"
                              class="botaoEnviar"
                              color="teal lighten-1"
                              elevation="2"
                              medium
                              outlined
                              rounded
                              :disabled= "loading"
                          >
                              {{ loading ? "LOADING..." : "Cadastrar" }}
                          </v-btn>
                        
                      </div>   
  </div>


</template>

<script>
export default {
    name: "CadastroSugestao",
    data() {
        return {
            nome: "",
            email: "",
            referencia: "",
            noticia:""
        };
    },
    methods: {
        push() {
          this.loading=true
          setTimeout(()=>{
          this.$router.push('/analisecadastro')
          },1000)
           
        },
        limpar() {
            this.nome = "";
            this.email = "";
            this.referencia = "";
            this.noticia = "";
        },
    },
};
</script>

<style scoped>
  .CadastroSugestao{
    text-align: left;
    margin-top: 30 px;
    margin-left: 30 px;
    margin-right: 30 px;
  }
  v-text-field{
    text-align: left;
  }
</style>