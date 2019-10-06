<template>
	<v-container fluid>
		<v-row>
			<v-col cols="12">
				<v-card>
						<v-card-title>
							<p class="title">Controle de Mesas</p>
							<v-spacer></v-spacer>
							<v-btn small class="pa-2" color="primary" >Abrir Comanda - Alt+F1</v-btn>
							<v-checkbox class="ml-5" label="Classic Style" />
							<v-checkbox  class="ml-2" label="Amapá Style" />
						</v-card-title>
						<v-simple-table>
							<template v-slot:default>
								<thead>
									<tr>
										<th class="text-left">CÓDIGO:</th>
										<th class="text-left">MESA:</th>
										<th class="text-left">DATA:</th>
										<th class="text-left">HORA:</th>
										<th class="text-left">ID:</th>
										<th class="text-left">CLIENTE:</th>
										<th class="text-left">EMITIDO POR:</th>
										<th class="text-left">TROCA RECENTE:</th>
									</tr>
								</thead>
								<tbody>
									<tr @click="ControleComanda" v-for="item in controlemesa" :key="item.name">
										<td>{{ item.codigo }}</td>
										<td>{{ item.mesa }}</td>
										<td>{{ item.data }}</td>
										<td>{{ item.hora }}</td>
										<td>{{ item.id }}</td>
										<td>{{ item.cliente }}</td>
										<td>{{ item.emitido }}</td>
										<td>{{ item.troca }}</td>
									</tr>
								</tbody>
							</template>
						</v-simple-table>
					</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
  export default {
    data () {
      return {
        controlemesa: [
          {
            codigo:'00000',
            mesa: '1',
            data: '01/10/19',
            hora: '17:35',
            id: '0001',
            cliente: 'Matheus Mendes',
            emitido: 'Alexânia Giusti',
            troca: 'Sem Trocas',
          },
          {
            codigo:'00000',
            mesa: '1',
            data: '01/10/19',
            hora: '17:35',
            id: '0001',
            cliente: 'Matheus Mendes',
            emitido: 'Alexânia Giusti',
            troca: 'Sem Trocas',
          },
          {
            codigo:'00000',
            mesa: '1',
            data: '01/10/19',
            hora: '17:35',
            id: '0001',
            cliente: 'Matheus Mendes',
            emitido: 'Alexânia Giusti',
            troca: 'Sem Trocas',
          },
          {
            codigo:'00000',
            mesa: '1',
            data: '01/10/19',
            hora: '17:35',
            id: '0001',
            cliente: 'Matheus Mendes',
            emitido: 'Alexânia Giusti',
            troca: 'Sem Trocas',
          },
          {
            codigo:'00000',
            mesa: '1',
            data: '01/10/19',
            hora: '17:35',
            id: '0001',
            cliente: 'Matheus Mendes',
            emitido: 'Alexânia Giusti',
            troca: 'Sem Trocas',
          },
          {
            codigo:'00000',
            mesa: '1',
            data: '01/10/19',
            hora: '17:35',
            id: '0001',
            cliente: 'Matheus Mendes',
            emitido: 'Alexânia Giusti',
            troca: 'Sem Trocas',
          },
          {
            codigo:'00000',
            mesa: '1',
            data: '01/10/19',
            hora: '17:35',
            id: '0001',
            cliente: 'Matheus Mendes',
            emitido: 'Alexânia Giusti',
            troca: 'Sem Trocas',
          },
          {
            codigo:'00000',
            mesa: '1',
            data: '01/10/19',
            hora: '17:35',
            id: '0001',
            cliente: 'Matheus Mendes',
            emitido: 'Alexânia Giusti',
            troca: 'Sem Trocas',
          },
          {
            codigo:'00000',
            mesa: '1',
            data: '01/10/19',
            hora: '17:35',
            id: '0001',
            cliente: 'Matheus Mendes',
            emitido: 'Alexânia Giusti',
            troca: 'Sem Trocas',
          },
          {
            codigo:'00000',
            mesa: '1',
            data: '01/10/19',
            hora: '17:35',
            id: '0001',
            cliente: 'Matheus Mendes',
            emitido: 'Alexânia Giusti',
            troca: 'Sem Trocas',
          },
          {
            codigo:'00000',
            mesa: '1',
            data: '01/10/19',
            hora: '17:35',
            id: '0001',
            cliente: 'Matheus Mendes',
            emitido: 'Alexânia Giusti',
            troca: 'Sem Trocas',
          },
        ],
      }
    },
    methods: {
      ControleComanda() {
        this.$router.push('/home/controlecomanda')
      }
    }
  }
</script>