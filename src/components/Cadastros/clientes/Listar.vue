<template>
  <Listar title="Clientes" icon="person">
    <v-list dense two-line slot="lista" class="pa-0 elevation-1">
      <template v-for="(cliente, index) in clientes">
        <v-list-item @click="$router.push(`/home/cliente/editar/${cliente['.key']}`)" :key="index">
          <v-avatar class="elevation-1 mr-2">
            <v-icon>place</v-icon>
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">{{ cliente.nome }}</v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
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
          nome: "Novo Cliente",
          path: "/home/clientes/criar"
        }
      ],
      clientes: []
    };
  },
  firebase() {
    return {
      clientes: this.$db.ref("cadastros/clientes")
    };
  }
};
</script>