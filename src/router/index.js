import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import ListaVerificacao from '../views/ListaVerificacao.vue'
import FiqueAtento from '../views/FiqueAtento.vue'
import SobreNos from '../views/SobreNos.vue'
import SugestoesUsuario from '../views/SugestoesUsuario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MeuInicio',
    component: MeuInicio
  },
  {
    path: '/listaverificacao',
    name: 'ListaVerificacao',
    component: ListaVerificacao
  },
  {
    path: '/fiqueatento',
    name: 'FiqueAtento',
    component: FiqueAtento
  },
  {
    path: '/sugestoesusuario',
    name: 'SugestoesUsuario',
    component: SugestoesUsuario
  },
  {
    path: '/sobrenos',
    name: 'SobreNos',
    component: SobreNos
  },
]

const router = new VueRouter({
  routes
})

export default router
