<template>
  <Editar :title="bairro['bairro']" :menu="menu" icon="edit">
    <v-form slot="form" ref="form">
      <v-flex xs12>
        <v-text-field v-model="bairro.bairro" label="Bairro" />
      </v-flex>
      <v-flex xs12>
        <v-text-field v-model="bairro.taxa" label="Taxa" />
      </v-flex>
    </v-form>
    <template slot="menu" :menu="menu" />
  </Editar>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      menu: [
        {
          nome: "Excluir",
          path: "/home/bairros/excluir/" + this.id,
          icon: "delete",
          dados: bairro
        }
      ],
      bairro: {}
    };
  },
  firebase() {
    return {
      bairro: this.$db.ref(`cadastros/bairros/${this.id}`)
    };
  },
  mounted() {}
};
</script>