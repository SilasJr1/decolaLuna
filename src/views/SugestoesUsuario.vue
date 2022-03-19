<template>
  
  <div class="CadastroSugestao">
    <h1 class="text-h5 text-left mb-3 mt-5">Ficou em dúvida se alguma notícia é <strong>fato</strong> ou <strong>fake</strong>? <br> Pergunte pra gente!</h1>
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
            color=""
            elevation="2"
            medium
            outlined
            rounded
            @click="limpar"
          >
            Limpar
          </v-btn>

          <v-btn
            class="botaoEnviar"
            color=""
            elevation="2"
            medium
            outlined
            rounded
            @click="limpar"
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
                  <span class="text-h5">User Profile</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal first name*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal middle name"
                          hint="example of helper text only on focus"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal last name*"
                          hint="example of persistent helper text"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Password*"
                          type="password"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-select
                          :items="['0-17', '18-29', '30-54', '54+']"
                          label="Age*"
                          required
                        ></v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-autocomplete
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          label="Interests"
                          multiple
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                  >
                    Save
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
        
        cadastrar() {
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