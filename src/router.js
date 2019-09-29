import Vue from "vue";
import Router from "vue-router";

/* Views aqui */
import Login from "./views/Login.vue"
import Home from "./views/Home.vue";

/* Componentes da Pasta Clientes*/
import Cadastrados from "./components/Clientes/Cadastrados.vue";

/* Componentes da Pasta Pedidos */
import Mesa from "./components/Pedidos/Mesa.vue";
import Comanda from "./components/Pedidos/Comanda.vue";
import Motoboy from "./components/Pedidos/Motoboy.vue";

/* Componentes da Pasta Caixa */
import FluxoDeCaixa from "./components/Caixa/FluxoDeCaixa.vue";
import ResumoDeCaixa from "./components/Caixa/ResumoDeCaixa.vue";
import ControlePosTef from "./components/Caixa/ControlePosTef.vue";

/* Componentes da Pasta Cadastros */
import CadastroClientes from "./components/Cadastros/Clientes.vue";
import CadastroColaboradores from "./components/Cadastros/Colaboradores.vue";
import CadastroProdutos from "./components/Cadastros/Produtos.vue";
import CadastroFornecedores from "./components/Cadastros/Fornecedores.vue";
import CadastroConvenios from "./components/Cadastros/Convenios.vue";
import CadastroPromocoes from "./components/Cadastros/Promocoes.vue";
import CadastroBairros from "./components/Cadastros/Bairros.vue";

/* Componente Controle de Estoque */
import ControleEstoque from "./components/Estoque/ControleEstoque.vue";

/* Componente Relatorio */
import Relatorios from "./components/Relatorio/Relatorios.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        {
          path: "/home/cadastros",
          name: "cadastrados",
          component: Cadastrados
        },
        {
          path: "/home/mesa",
          name: "Mesa",
          component: Mesa
        },
        {
          path: "/home/comanda",
          name: "Comanda",
          component: Comanda
        },
        {
          path: "/home/motoboy",
          name: "Motoboy",
          component: Motoboy
        },
        {
          path: "/home/fluxodecaixa",
          name: "FluxoDeCaixa",
          component: FluxoDeCaixa
        },
        {
          path: "/home/resumodecaixa",
          name: "ResumoDeCaixa",
          component: ResumoDeCaixa
        },
        {
          path: "/home/controlepostef",
          name: "ControlePosTef",
          component: ControlePosTef
        },
        {
          path: "/home/cadastroclientes",
          name: "CadastroClientes",
          component: CadastroClientes
        },
        {
          path: "/home/cadastrocolaboradores",
          name: "CadastroColaboradores",
          component: CadastroColaboradores
        },
        {
          path: "/home/cadastroprodutos",
          name: "CadastroProdutos",
          component: CadastroProdutos
        },
        {
          path: "/home/cadastrofornecedores",
          name: "CadastroFornecedores",
          component: CadastroFornecedores
        },
        {
          path: "/home/cadastroconvenios",
          name: "CadastroConvenios",
          component: CadastroConvenios
        },
        {
          path: "/home/cadastropromocoes",
          name: "CadastroPromocoes",
          component: CadastroPromocoes
        },
        {
          path: "/home/cadastrobairros",
          name: "CadastroBairros",
          component: CadastroBairros
        },
        {
          path: "/home/controleestoque",
          name: "ControleEstoque",
          component: ControleEstoque
        },
        {
          path: "/home/relatorios",
          name: "Relatorios",
          component: Relatorios
        },

      ]
    }
  ]
});
