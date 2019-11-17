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
			<v-card outlined>
				<v-toolbar
				flat
				>
				<v-toolbar-title> <span class="font-weight-bold with0" style="font-size: 16pt">Cadastra-se</span></v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn color="primary" @click="$router.push({name: 'login'})">Entrar</v-btn>
			</v-toolbar>
			<v-card-text>
				<v-form>

					<v-text-field
					outlined
					label="E-mail"
					v-model="dataResetPassword.email"
					type="text"
					autocomplete="new-email"
					:rules="rules.required"
					></v-text-field>
					
					<v-text-field
					outlined
					label="Senha"
					v-model="dataResetPassword.password"
					type="password"
					autocomplete="new-password"
					:rules="rules.required"
					></v-text-field>

					<v-text-field
					label="Confirme sua senha"
					v-model="dataResetPassword.password_confirmation"
					type="password"
					autocomplete="new-password-confirmation"
					:rules="rules.required"
					></v-text-field>
				</v-form>
			</v-card-text>
			<v-card-actions>
				<v-btn @click="store" color="success" block="">Cadastrar</v-btn>
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
			dataResetPassword: {
				email: '',
				password: '',      
				password_confirmation: '',
				token: ''
			},
			rules: {
				required: [
				v => !!v || 'Campo obrigatório.'
				]
			}
		}),
		
		methods:{
			store(){
				this.$store.commit('setVueLoad', true)
				this.$http.post(`${this.$urlApi}/password/reset`, this.dataResetPassword)
				.then(res => {
					this.$store.commit('setVueLoad', true)
					this.$toastr.success('Senha altarada com sucesso.')
					this.$router.push({name: 'login'})
				})
				.catch(e => {
					this.$store.commit('setVueLoad', false)
					let stringErrors = [];
						
					Object.keys(e.response.data.errors).map(value => {
						return stringErrors.push(`${e.response.data.errors[value]}`);
					});

					this.$store.dispatch("showModalRequestError", stringErrors)
				})
			}
		},
		created(){
			let user = this.$store.getters.getUser;
			if(user){
				this.$router.push({ name: "home" });
			}


			this.$http.get(`${this.$urlApi}/password/find/${this.$route.params.token}`)
            .then(res => {
                this.dataResetPassword.email = res.data.email;
                this.dataResetPassword.token = res.data.token;
            })
		}
	}
</script>

<style scoped>
	
	#inspire {
		background: linear-gradient(to right, #232526, #414345);
	}
	
</style>