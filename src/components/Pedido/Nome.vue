<template>
   <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">CÓDIGO</th>
          <th class="text-left">NOME</th>
          <th class="text-left">TELEFONE</th>
          <th class="text-left">ENDEREÇO</th>
          <th class="text-left">RG</th>
          <th class="text-left">REFERÊNCIA</th>
          <th class="text-left">CEP</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in searchname" :key="item.name">
          <td>{{ item.codigo }}</td>
          <td><strong>{{ item.nome }}</strong></td>
          <td>{{ item.telefone }}</td>
          <td>{{ item.endereco }}</td>
          <td>{{ item.rg }}</td>
          <td>{{ item.referencia }}</td>
          <td>{{ item.cep }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        searchname: [
          {
            codigo:'00000',
            nome: 'Patrick Lorran',
            telefone: '+55 96 981134321',
            endereco: 'Alameda B, Rua 19 de Maio | Nova União',
            rg: '600543',
            referencia: 'Próximo a Creche Mauro César',
            cep: '68927021',
          },
          {
            codigo:'00000',
            nome: 'Patrick Lorran',
            telefone: '+55 96 981134321',
            endereco: 'Alameda B, Rua 19 de Maio | Nova União',
            rg: '600543',
            referencia: 'Próximo a Creche Mauro César',
            cep: '68927021',
          },
          {
            codigo:'00000',
            nome: 'Patrick Lorran',
            telefone: '+55 96 981134321',
            endereco: 'Alameda B, Rua 19 de Maio | Nova União',
            rg: '600543',
            referencia: 'Próximo a Creche Mauro César',
            cep: '68927021',
          },
          {
            codigo:'00000',
            nome: 'Patrick Lorran',
            telefone: '+55 96 981134321',
            endereco: 'Alameda B, Rua 19 de Maio | Nova União',
            rg: '600543',
            referencia: 'Próximo a Creche Mauro César',
            cep: '68927021',
          },
          {
            codigo:'00000',
            nome: 'Patrick Lorran',
            telefone: '+55 96 981134321',
            endereco: 'Alameda B, Rua 19 de Maio | Nova União',
            rg: '600543',
            referencia: 'Próximo a Creche Mauro César',
            cep: '68927021',
          },
          {
            codigo:'00000',
            nome: 'Patrick Lorran',
            telefone: '+55 96 981134321',
            endereco: 'Alameda B, Rua 19 de Maio | Nova União',
            rg: '600543',
            referencia: 'Próximo a Creche Mauro César',
            cep: '68927021',
          },
          {
            codigo:'00000',
            nome: 'Patrick Lorran',
            telefone: '+55 96 981134321',
            endereco: 'Alameda B, Rua 19 de Maio | Nova União',
            rg: '600543',
            referencia: 'Próximo a Creche Mauro César',
            cep: '68927021',
          },
          {
            codigo:'00000',
            nome: 'Patrick Lorran',
            telefone: '+55 96 981134321',
            endereco: 'Alameda B, Rua 19 de Maio | Nova União',
            rg: '600543',
            referencia: 'Próximo a Creche Mauro César',
            cep: '68927021',
          },
          {
            codigo:'00000',
            nome: 'Patrick Lorran',
            telefone: '+55 96 981134321',
            endereco: 'Alameda B, Rua 19 de Maio | Nova União',
            rg: '600543',
            referencia: 'Próximo a Creche Mauro César',
            cep: '68927021',
          },
          {
            codigo:'00000',
            nome: 'Patrick Lorran',
            telefone: '+55 96 981134321',
            endereco: 'Alameda B, Rua 19 de Maio | Nova União',
            rg: '600543',
            referencia: 'Próximo a Creche Mauro César',
            cep: '68927021',
          },
          {
            codigo:'00000',
            nome: 'Patrick Lorran',
            telefone: '+55 96 981134321',
            endereco: 'Alameda B, Rua 19 de Maio | Nova União',
            rg: '600543',
            referencia: 'Próximo a Creche Mauro César',
            cep: '68927021',
          },
          {
            codigo:'00000',
            nome: 'Patrick Lorran',
            telefone: '+55 96 981134321',
            endereco: 'Alameda B, Rua 19 de Maio | Nova União',
            rg: '600543',
            referencia: 'Próximo a Creche Mauro César',
            cep: '68927021',
          },
          {
            codigo:'00000',
            nome: 'Patrick Lorran',
            telefone: '+55 96 981134321',
            endereco: 'Alameda B, Rua 19 de Maio | Nova União',
            rg: '600543',
            referencia: 'Próximo a Creche Mauro César',
            cep: '68927021',
          },
          {
            codigo:'00000',
            nome: 'Patrick Lorran',
            telefone: '+55 96 981134321',
            endereco: 'Alameda B, Rua 19 de Maio | Nova União',
            rg: '600543',
            referencia: 'Próximo a Creche Mauro César',
            cep: '68927021',
          },
        ],
      }
    },
  }
</script>