<template>
  <v-dialog width="300" v-model="mostrar" class="bg pa-0 ma-0" fluid>
    <v-layout column>
      <v-toolbar dense dark>
        <v-btn icon @click="mostrar=false,$router.go(-1)" class="mr-1">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-title class="text-uppercase">Excluir</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon color="red lighten-1" size="20">delete</v-icon>
      </v-toolbar>

      <v-flex xs12>
        <v-card class="pa-2">
          <h5>{{ item }}</h5>
          <h3 class="text-center font-weight-light">Deseja realmente excluir?</h3>
          <v-layout class="pa-2" nowrap>
            <v-flex class="pa-1" xs6>
              <v-btn @click="$router.go(-1)" class="white--text" color="grey darken-3" text block>
                <v-icon size="15">arrow_back</v-icon>Cancelar
              </v-btn>
            </v-flex>
            <v-flex class="pa-1" xs6>
              <v-btn class="white--text" color="grey darken-4" text block>Excluir</v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-dialog>
</template>

<script>
export default {
  props: ["item", "id"],
  data() {
    return {
      mostrar: true,
      item: {}
    };
  },
  firebase() {
    return {};
  },
  mounted() {
    this.mostrar = true;
  }
};
</script>