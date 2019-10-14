<template>
	<v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">ORIGEM</th>
          <th class="text-left">DATA</th>
          <th class="text-left">HORA</th>
          <th class="text-left">VALOR</th>
          <th class="text-left">DESCRIÇÃO</th>
          <th class="text-left">CÓDIGO</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in fluxodelivery" :key="item.name">
          <td><span class="text-uppercase"><strong>{{ item.origem }}</strong></span></td>
          <td>{{ item.data }}</td>
          <td>{{ item.hora }}</td>
          <td>{{ item.valor }}</td>
          <td>{{ item.descricao }}</td>
          <td>{{ item.codigo }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        fluxodelivery: [
          {
            origem:'Salão',
            data: '09/10/2019',
            hora: '16:28',
            valor: 'R$ 90,00',
            descricao: 'Thayla Gonçalves',
            codigo: '00001',
          },
        ],
      }
    },
  }
</script>