<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <!-- Inicio do card da tela  -->
        <v-card>
          <v-card-title>
            <p class="title">Clientes | Cadastros</p>
            <v-spacer></v-spacer>
            <p class="text-center title">Total de cadastros: 1537</p>
            <v-spacer></v-spacer>
            <v-btn id="BtnCadastrar" small color="primary"> <span class="white--text">Cadastrar - Alt+F1</span></v-btn>
          </v-card-title>
          <v-tabs v-model="tab" dark grow>
            <v-tab>
              Nome
            </v-tab>
            <v-tab>
              Endereço
            </v-tab>
            <v-tab>
              Almoxarifado
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <Nome/>
            </v-tab-item>
            <v-tab-item>
              <Endereco/>
            </v-tab-item>
            <v-tab-item>
              <Almoxarifado/>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Nome from "./Nome"
import Endereco from "./Endereco"
import Almoxarifado from "./Almoxarifado"
export default {
  components: {
    Nome,
    Endereco,
    Almoxarifado,
  },
  data () {
    return {
      tab: null
    }
  }
}
</script>

<style scoped>

#BtnCadastrar:hover {
color: #BDBDBD;
}

</style>

