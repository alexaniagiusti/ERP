<template>
  <v-container fluid>
    <v-layout column>
      <v-toolbar>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-flex xs12>
        <slot name="form"></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["title"]
};
</script>