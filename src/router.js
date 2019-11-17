import Vue from "vue";
import Router from "vue-router";

/* Views aqui */
import Login from "./views/Login.vue";
import RecoverPassword from '@/views/RecoverPassword.vue'
import ResetPassword from '@/views/ResetPassword.vue'

import Home from "./views/Home.vue";

/* Componentes da Pasta Clientes*/
import Cadastrados from "./components/Clientes/Cadastrados.vue";

/* Componete da Pasta Pedido para exibição de clientes cadastrados e cadastro de novo cliente */

import CadastroGeral from "./components/Pedido/CadastroGeral.vue";

/* Componentes da Pasta Comanda */
import Mesa from "./components/Comanda/Mesa.vue";
import Motoboy from "./components/Comanda/Motoboy.vue";
import ControleComanda from "./components/Comanda/ControleComanda";

/* Componentes da Pasta Caixa */
import FluxoDeCaixa from "./components/Caixa/FluxoDeCaixa.vue";
import ResumoDeCaixa from "./components/Caixa/ResumoDeCaixa.vue";
import ControlePosTef from "./components/Caixa/ControlePosTef.vue";

/* Componentes da Pasta Cadastros */
import CadastroClientes from "./components/Cadastros/Clientes.vue";
import CadastroColaboradores from "./components/Cadastros/Colaboradores.vue";
import CadastroProdutos from "./components/Cadastros/Produtos.vue";
// import CadastroFornecedores from "./components/Cadastros/Fornecedores.vue";
import CadastroConvenios from "./components/Cadastros/Convenios.vue";
import CadastroPromocoes from "./components/Cadastros/Promocoes.vue";
import CadastroBairros from "./components/Cadastros/Bairros.vue";

/* Componente Controle de Estoque */
import ControleEstoque from "@/components/Estoque/ControleEstoque.vue";

/* Componente Relatorio */
import Relatorios from "./components/Relatorio/Relatorios.vue";

//BAIRROS
import ListarBairros from "@/components/Cadastros/bairros/Listar.vue";
import CriarBairro from "@/components/Cadastros/bairros/Criar.vue";
import EditarBairro from "@/components/Cadastros/bairros/Editar.vue";
import ExcluirBairro from "@/components/Cadastros/bairros/Excluir.vue";

//CLIENTES
import ListarClientes from "@/components/Cadastros/clientes/Listar.vue";
import CriarCliente from "@/components/Cadastros/clientes/Criar.vue";
import EditarCliente from "@/components/Cadastros/clientes/Editar.vue";
import ExcluirCliente from "@/components/Cadastros/clientes/Excluir.vue";

import { fornecedoresRoutes } from '@/routes/Fornecedores'
import { clientesRoutes } from '@/routes/Clientes'
import { produtosRoutes } from '@/routes/Produtos'
import { formaPagamentoRoutes } from '@/routes/FormaPagamento'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/login",
			name: "login",
			component: Login
		},
		{
			path: '/recuperar-senha',
			name: 'recoverPassword',
			component: RecoverPassword
		},
		{
			path: '/reset-password/:token',
			name: 'resetPassword',
			component: ResetPassword,
			props: true
		},
		{
			path: "/",
			name: "home",
			component: Home,
			children: [
				// Pedido - Clientes Cadastrados
				{
					path: "/home/pedido/cadastrogeral",
					name: "pedidos",
					component: CadastroGeral
				},
				//FLUXO_DE_BAIRROS
				{
					path: "/home/bairros/listar",
					name: "listar bairros",
					component: ListarBairros
				},
				{
					path: "/home/bairros/criar",
					name: "criar bairro",
					component: CriarBairro,
					props: true
				},
				{
					path: "/home/bairros/editar/:id",
					name: "editar bairro",
					component: EditarBairro,
					props: true
				},
				{
					path: "/home/bairros/excluir/:id",
					name: "excluir bairro",
					component: ExcluirBairro
				},
				//FIM_FLUXO_DE_BAIRROS
				//FLUXO_DE_CLIENTES
				{
					path: "/home/clientes/listar",
					name: "listar clientes",
					component: ListarClientes
				},
				{
					path: "/home/clientes/criar",
					name: "criar cliente",
					component: CriarCliente,
					props: true
				},
				{
					path: "/home/clientes/editar/:id",
					name: "editar cliente",
					component: EditarCliente,
					props: true
				},
				{
					path: "/home/clientes/excluir/:id",
					name: "excluir cliente",
					component: ExcluirCliente
				},
				//FIM_FLUXO_DE_CLIENTE
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
					path: "/home/motoboy",
					name: "Motoboy",
					component: Motoboy
				},
				{
					path: "/home/controlecomanda",
					name: "ControleComanda",
					component: ControleComanda
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
				...fornecedoresRoutes,
				...clientesRoutes,
				...produtosRoutes,
				...formaPagamentoRoutes,
			]
		}
	]
});
