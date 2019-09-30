<template>
  <Listar title="Bairros" icon="place">
    <v-list dense two-line slot="lista" class="pa-0">
      <template v-for="(bairro, index) in bairros">
        <v-list-item @click="$router.push(`/home/bairros/editar/${bairro['.key']}`)" :key="index">
          <v-avatar class="elevation-1 mr-2">
            <v-icon>place</v-icon>
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">{{ bairro.bairro }}</v-list-item-title>
            <v-list-item-subtitle>Taxa: {{ bairro.taxa }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="index"></v-divider>
      </template>
    </v-list>

    <v-list dense slot="menu">
      <template v-for="(item, index) in menu">
        <v-list-tile :to="item.path" :key="index">
          <v-list-item-content>
            <v-list-item-title>{{ item.nome }}</v-list-item-title>
          </v-list-item-content>
        </v-list-tile>
      </template>
    </v-list>
  </Listar>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          nome: "Novo Bairro",
          path: "/home/bairros/criar"
        }
      ],
      bairros: []
    };
  },
  firebase() {
    return {
      bairros: this.$db.ref("cadastros/bairros")
    };
  }
};
</script>