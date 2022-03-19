<template>
  
  <div class="CadastroSugestao">
    <h1 class="text-h5 text-left mb-3 mt-5">Ficou em dúvida se alguma notícia é <strong>fato</strong> ou <strong>fake</strong>? <br> Pergunte pra gente!</h1>
        
        <v-form class="registro-box" ref="form" >

          <v-text-field v-model="nome" label="Nome*" required>
          </v-text-field>

          <v-text-field v-model="email" label="E-mail para contato*" required>
          </v-text-field>

          <v-select
            :items="['Redes Sociais','Jornais','Amigo','Outros']"
            label="Como você teve acesso a essa informação?"
            required
          ></v-select>

          <v-text-field v-model="noticia" hint="Invasão alienígena, outros" label="Diga a notícia que você está em dúvida*" required>
          <!--quando clica na label, o texto fica com uma margem, diferente das labels de nome e e-mail-->
          </v-text-field>            
            
      </v-form> 
      
      <div class="botoes">

          <v-btn
                  class="botaoLimpar"
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="limpar"
                >
                  Limpar
            </v-btn>
            <v-btn
                  class="botaoEnviar"
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="enviar"
                >
                  Enviar
          </v-btn>    

        </div>   


        <div class="CaixaCadastro">
          <v-row justify="center">
            <v-dialog
              v-model="dialog"
              persistent
              max-width="600px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Open Dialog
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5 center">Sugestão enviada!</span>
                  <h5 class="textoDialog left">Obrigada por nos ajudar no combate às fake news!
                    Iremos analisar a sua sugestão e quando verificarmos os fatos, entraremos em contato.
                  </h5>
                </v-card-title>
                <v-card-text>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                  >
                    Fechar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
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
        /*push() {
          this.loading=true
          setTimeout(()=>{
          this.$router.push('/analisecadastro')
          },1000)
           
        },*/
        limpar() {
            this.nome = "";
            this.email = "";
            this.referencia = "";
            this.noticia = "";
        },
        
        enviar() {
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
  .botoes{
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    margin: 0px 20px;
  }
  .caixaDialogo{
    margin: 20px;
  }
  
  .caixaDialogo p{
    text-decoration: none;
  }
</style>