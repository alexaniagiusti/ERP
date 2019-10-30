<template>
	<v-container fluid>
		<v-row>
			<v-col cols="12" md="12" xs="12">
				<v-card class="pa-2">
					<v-card-title><span class="title">Cadastrar Novo Fornecedor</span></v-card-title>
					<v-row>
						<v-col  cols="12" md="3" xs="12">
							<v-text-field outlined v-model="nome" label="Nome"></v-text-field>	
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="nome_fantasia" label="Nome Fantasia"></v-text-field>	
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="cnpj" label="CNPJ"></v-text-field>	
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="ie" label="IE"></v-text-field>	
							<v-row>
							</v-row>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="cep" label="CEP"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="logradouro" label="Logradouro"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="numero" label="Número"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="bairro" label="Bairro"></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="cidade" label="Cidade"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="uf" label="UF"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="referencia_endereco" label="Referência"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="telefone" label="Referência"></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="telefone" label="Telefone"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="celular1" label="Celular 1"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="celular2" label="Celular 2"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined v-model="email" label="E-mail"></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" md="12" xs="12">
							<v-btn color="primary" block>Cadastrar</v-btn>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data(){
			return {
				Fornecedor: {
					"nome": "",
					"nome_fantasia": "",
					"cnpj": "",
					"ie": "",
					"cep": "",
					"logradouro": "",
					"numero": "",
					"bairro": "",
					"cidade": "",
					"uf": "",
					"referencia_endereco": "",
					"telefone": "",
					"celular1": "",
					"celular2": "",
					"email": ""
				}
			}
		},
		
	}
</script>