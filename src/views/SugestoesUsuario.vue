<template>
  
  <div class="CadastroSugestao">
    <h1 class="text-h5 text-left mb-3 mt-5">Ficou em dúvida se alguma notícia é fato ou fake? <br> Pergunta pra gente!</h1>
      <!--h2 class="text-h5 text-center mb-3 mt-5">Cadastro</h2-->
        <v-form class="registro-box" ref="form" >
                      <v-text-field v-model="nome" label="Usuário" required>
                      </v-text-field>
            
                      <v-text-field v-model="email" label="E-mail" required>
                      </v-text-field>
                      
                      <v-text-field v-model="referencia" label="Como você teve acesso a essa informação?" required>
                      </v-text-field>
            
                      <v-text-field v-model="noticia" label="Diga a notícia que você está em dúvida" required>
                      </v-text-field>

                      <v-text-field v-model="referencia" label="Como você teve acesso a essa informação?" required> 
                        <!--quando clica na label, o texto fica com uma margem, diferente das labels de nome e e-mail-->
                      </v-text-field>

                      <v-text-field v-model="noticia" label="Diga a notícia que você está em dúvida" required>
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