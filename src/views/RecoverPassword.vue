<template>
	<v-app id="">
		<VueLoad />
		<ModalRequestError />
		<v-content>
			<v-container
			fluid
			fill-height
			>
			<v-layout
			align-center
			justify-center
			>
			<v-flex
			xs12
			sm8
			md4
			>
			<v-alert
			dense
			border="left"
			type="warning"
			v-model="message"
			>
			Enviamos um link de recuperação para seu e-mail.
			</v-alert>
			<v-card outlined>
				<v-toolbar
				flat
				>
				<v-toolbar-title> <span class="font-weight-bold with0" style="font-size: 16pt">Recuperar senha</span></v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn color="primary" @click="$router.push({name: 'login'})">Entrar</v-btn>
			</v-toolbar>
			<v-card-text>
				<v-form>
					<v-text-field
					outlined
					label="E-mail"
					v-model="data.email"
					type="text"
					autocomplete="new-name"
					:rules="rules.required"
					></v-text-field>
				</v-form>
			</v-card-text>
			<v-card-actions>
				<v-btn @click="store" color="success" block="">Recuperar</v-btn>
			</v-card-actions>
		</v-card>
	</v-flex>
</v-layout>
</v-container>
</v-content>
</v-app>
</template>

<script>
	import ModalRequestError from '@/components/shared/ModalRequestError'
	import VueLoad from '@/components/shared/VueLoad'
	export default {
		props: {
			source: String,
		},
		components: {
			ModalRequestError,
			VueLoad
		},
		data: () => ({
			drawer: null,
			data:{
				email: '',
			},
			message: false,
			rules: {
				required: [
				v => !!v || 'Campo obrigatório.'
				]
			}
		}),
		
		methods:{
			store(){
				this.$store.commit('setVueLoad', true)
				this.$http.post(`${this.$urlApi}/password/create`, this.data)
				.then(res => {
					this.$store.commit('setVueLoad', false)
					this.message = true;
					// this.$toastr.success('Cadastro efetuado com sucesso');
					// this.$router.push({'name':'login'})
				})
				.catch(e => {
						let stringErrors = [];
						
						Object.keys(e.response.data.errors).map(value => {
							return stringErrors.push(`${e.response.data.errors[value]}`);
						});

						this.$store.dispatch("showModalRequestError", stringErrors)
					}	
				)
			}
		},
		created(){
			let user = this.$store.getters.getUser;
			if(user){
				this.$router.push({ name: "home" });
			}
		}
	}
</script>

<style scoped>
	
	#inspire {
		background: linear-gradient(to right, #232526, #414345);
	}
	
</style>