<template>
	<div>
		<VueLoad />
		<v-app-bar app clipped-left dark elevation="1">
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<span class="hidden-sm-and-down title ml-3 mr-5">
				Wikilore&nbsp;
				<span class="font-weight-light">ERP</span>
			</span>
			<v-spacer></v-spacer>
			<v-text-field solo-inverted flat hide-details label="Pesquisar" prepend-inner-icon="search"></v-text-field>
			<v-spacer></v-spacer>
			<span class="hidden-sm-and-down">Olá, {{$helper.firstName($store.getters.getUser.name)}}</span>
			<v-icon class="hidden-sm-and-up">person</v-icon>
		</v-app-bar>
		
		<v-navigation-drawer v-model="drawer" app clipped width="300" dark>
			<v-list dense rounded>
				<v-list-group prepend-icon="fastfood" no-action>
					<template v-slot:activator>
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Pedido</v-list-item-title>
						</v-list-item-content>
					</template>
					
					<v-list-item to="/home/pedido/cadastrogeral">
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Cadastros</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-group>
				
				<v-list-group prepend-icon="store" no-action>
					<template v-slot:activator>
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Comandas</v-list-item-title>
						</v-list-item-content>
					</template>
					
					<v-list-item to="/home/mesa">
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Controle de Mesas</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					
					<v-list-item to="/home/motoboy">
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Controle de Motoboy</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-group>
				
				<v-list-group prepend-icon="local_atm" no-action>
					<template v-slot:activator>
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Caixa</v-list-item-title>
						</v-list-item-content>
					</template>
					
					<v-list-item to="/home/fluxodecaixa">
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Fluxo de Caixa</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item to="/home/resumodecaixa">
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Resumo de Caixa</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item to="/home/controlepostef">
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Controle de POS/TEF</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-group>
				
				<v-list-group prepend-icon="contacts" no-action>
					<template v-slot:activator>
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Cadastros</v-list-item-title>
						</v-list-item-content>
					</template>
					
					<v-list-item @click="$router.push({name: 'clientes'})">
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Clientes</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<!-- <v-list-item to="/home/cadastrocolaboradores">
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Colaboradores</v-list-item-title>
						</v-list-item-content>
					</v-list-item> -->
					<v-list-item @click="$router.push({name: 'produtos'})">
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Produtos</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item @click="$router.push({'name': 'fornecedores'})">
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Fornecedores</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item @click="$router.push({'name': 'formasPagamentos'})">
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Formas de Pagamento</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<!-- <v-list-item to="/home/cadastroconvenios">
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Convênios</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item to="/home/cadastropromocoes">
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Promoções</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item @click="$router.push({ name: 'listar bairros' })">
						<v-list-item-content>
							<v-list-item-title class="menuAtivo">Bairros</v-list-item-title>
						</v-list-item-content>
					</v-list-item> -->
				</v-list-group>
				
				<v-list-item to="/home/controleestoque">
					<v-icon class="mr-5">all_inbox</v-icon>
					<v-list-item-content>
						<v-list-item-title class="pa-3 menuAtivo">Controle de Estoque</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				
				<v-list-item to="/home/relatorios">
					<v-icon class="mr-5">description</v-icon>
					<v-list-item-content>
						<v-list-item-title class="pa-3 menuAtivo">Relatórios</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				
				<v-list-item class="mt-5">
					<v-icon class="mr-5">help</v-icon>
					<v-list-item-content>
						<v-list-item-title class="menuAtivo">Ajuda</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				
				<v-list-item>
					<v-icon class="mr-5">crop_rotate</v-icon>
					<v-list-item-content>
						<v-list-item-title class="menuAtivo" @click="logout">Trocar Conta</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-content>
			<router-view></router-view>
		</v-content>
		<!--
			<Footer/>-->
		</div>
	</template>
	
	<script>
		import Footer from "../components/core/Footer";
		import VueLoad from "../components/shared/VueLoad";
		export default {
			components: {
				Footer,
				VueLoad,
			},
			props: {
				source: String
			},
			data: () => ({
				drawer: null
			}),
			created(){
				let user = sessionStorage.getItem('user');
				if(!user){
					if(this.$route.name != 'login'){
						sessionStorage.redirectTo = window.location.href
					}
					this.$router.push({ name: "login" });
				}
			},
			methods: {
				logout() {
					sessionStorage.clear();
					this.$router.push({ name: "login" });
					this.$store.commit("setUser", null);
					location.reload();
				}
			}
		};
	</script>
	
	<style>
		#keep .v-navigation-drawer__border {
			display: none;
		}
		
		::-webkit-scrollbar {
			width: 2px;
			border-radius: 10px;
			background: #333;
		}
		::-webkit-scrollbar-thumb {
			background: rgb(180, 179, 179);
			border-radius: 10px;
		}
		
		.menuAtivo {
			color: #ffffff;
			border-radius: 5px;
			margin-right: 5px;
			font-weight: bold;
		}
	</style>