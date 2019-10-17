<template>
	<v-container fluid>
		<v-row>
			<v-col cols="12" md="12" xs="12">
				<v-card class="pa-2">
					<v-card-title><span class="title">Cadastrar Novo Fornecedor</span></v-card-title>
					<v-row>
						<v-col  cols="12" md="3" xs="12">
							<v-text-field outlined label="Nome"></v-text-field>	
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="Nome Fantasia"></v-text-field>	
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="CNPJ"></v-text-field>	
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="IE"></v-text-field>	
						<v-row>
						</v-row>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="CEP"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="Logradouro"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="Número"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="Bairro"></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="Cidade"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="UF"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="Referência"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="Referência"></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="Telefone"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="Celular 1"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="Celular 2"></v-text-field>
						</v-col>
						<v-col cols="12" md="3" xs="12">
							<v-text-field outlined label="E-mail"></v-text-field>
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