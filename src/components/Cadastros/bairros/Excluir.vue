<template>
  <Excluir :item="$route.params.dados.bairro"></Excluir>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      bairro: {}
    };
  },
  firebase() {
    return {
      bairro: this.$db.ref("/cadastros/bairros/" + this.id)
    };
  },
  methods: {
    excluir() {}
  }
};
</script>