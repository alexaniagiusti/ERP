<template>
  <v-container fluid>
      <v-toolbar>
        <v-avatar class="elevation-1 mr-1">
          <v-icon>{{ icon }}</v-icon>
        </v-avatar>
        <v-toolbar-title class="text-uppercase font-weight-bold">{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- Menu de tres pontos no canto superior direito do drawer -->
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <slot name="menu"></slot>
        </v-menu>
      </v-toolbar>

      <!-- imprime uma lista com os itens enviados do component onde foi importado -->
      <v-flex xs12>
        <v-card>
          <slot name="lista"></slot>
        </v-card>
      </v-flex>

      <!-- flex para adição de conteúdo personalidado, some caso não seja usada -->
      <v-flex class="pa-2" xs12>
        <v-card>
          <slot name="livre"></slot>
        </v-card>
      </v-flex>
  </v-container>
</template>

<script>
export default {
  props: ["title", "icon"]
};
</script>