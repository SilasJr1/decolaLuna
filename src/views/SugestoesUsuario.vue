<template>
  <v-container>  
  <div class="CadastroSugestao">
    <h1 class="text-h5 text-center mb-3 mt-5">Ficou em dúvida se alguma notícia é <strong>fato</strong> ou <strong>fake</strong>? <br> Pergunte pra gente!</h1>
        
        <v-form class="registro-box" ref="form">

          <v-text-field v-model="nome" label="Nome*" :rules="nomeRules" required>
          </v-text-field>

          <v-text-field v-model="email" label="E-mail para contato*" :rules="emailRules" required>
          </v-text-field>

          <v-select
            :items="['Redes Sociais','Jornais','Amigo','Outros']"
            label="Como você teve acesso a essa informação?"
            required
          ></v-select>

          <v-textarea v-model="noticia" hint="Invasão alienígena, outros" label="Fale mais sobre a notícia suspeita*" :rules="noticiaRules" required>
          </v-textarea>

      </v-form> 
      
      <v-container>
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
              
              <div class="CaixaCadastro">
                <v-dialog 
                  v-model="dialog"
                  persistent
                  max-width="600px"
                >
                  <template v-slot:activator="{ on, attrs }" >
                    <v-btn
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      @click="enviar"
                    >
                      Enviar
                    </v-btn>
                  </template>
                  <v-card >
                    
                    <div v-if="confereCadastroCompleto()">
                      <v-card-title>
                        <h5 class="text-h5 center">Sugestão enviada!</h5>
                      </v-card-title>
                      <v-card-text>
                        <div class="text--primary">Obrigada por nos ajudar no combate às fake news!
                          Iremos analisar a sua sugestão e quando verificarmos os fatos, entraremos em contato.</div>
                      </v-card-text>
                    </div>
                    <div v-else>
                      <v-card-title>
                      <h5 class="text-h5 center">Cadastro incompleto!</h5>
                      </v-card-title>
                      <v-card-text>
                        <div class="text--primary">Por favor, preencha as informações obrigatórias.</div>
                      </v-card-text>
                    </div>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click= "fechaDialog"
                      >
                        Fechar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
          
          </div> <!--botoes-->
      </v-container>
    </div> <!--cadastrosugestao-->
  </v-container>
</template>

<script>
export default {
    name: "CadastroSugestao",
    data() {
        
        return {
          
            valid: false,
            nome: '',
            nomeRules: [
              v => !!v || 'Este campo é obrigatório',
            ],
            email: '',
            emailRules: [
              v => !!v || 'Este campo é obrigatório',
              v => /.+@.+/.test(v) || 'Este E-mail não é válido',
            ],
            referencia: '',
            noticia:'',
            noticiaRules: [
              v => !!v || 'Este campo é obrigatório',
            ],
            dialog: false
        };
    },
    methods: {
        limpar() {
            this.nome = "";
            this.email = "";
            this.referencia = "";
            this.noticia = "";
        },
        
        enviar() {
        },

        fechaDialog(){
          this.dialog = false;
          this.limpar();
        },

        confereCadastroCompleto(){
            if(
            this.nome == "" ||
            this.email == ""||
            this.noticia == ""){
              return false;
            }else{
              return true;
            }
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
</style>