<template>
	<v-container fluid>
		<v-row>
			<v-col cols="12" xs="12" md="12">
				<v-card>
					<v-card-title>
						<span class="title">Fluxo de Caixa</span>
						<v-spacer></v-spacer>
						<v-btn color="primary" small>Adicionar Despesa</v-btn>
					</v-card-title>
					<v-tabs v-model="tab" dark>
						<v-tab>
							Geral
						</v-tab>
						<v-tab>
							Salão
						</v-tab>
						<v-tab>
							Delivery
						</v-tab>
						<v-tab>
							Uber Eats
						</v-tab>
						<v-tab>
							Ifood
						</v-tab>
						<v-tab>
							Site
						</v-tab>
					</v-tabs>
					
					<v-tabs-items v-model="tab">
						<v-tab-item>
							<Geral/>
						</v-tab-item>
						<v-tab-item>
							<Salao/>
						</v-tab-item>
						<v-tab-item>
							<Delivery/>
						</v-tab-item>
						<v-tab-item>
							<UberEats/>
						</v-tab-item>
						<v-tab-item>
							<Ifood/>
						</v-tab-item>
						<v-tab-item>
							<Site/>
						</v-tab-item>
					</v-tabs-items>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Geral from "./Fluxo/Geral"
import Salao from "./Fluxo/Salao"
import Delivery from "./Fluxo/Delivery"
import UberEats from "./Fluxo/UberEats"
import Ifood from "./Fluxo/Ifood"
import Site from "./Fluxo/Site"

export default {
	components: {
		Geral,
		Salao,
		Delivery,
		UberEats,
		Ifood,
		Site
	},
	data () {
		return {
			tab: null
		}
	}
}
</script>>