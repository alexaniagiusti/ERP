<template>
  <v-container class="bg pa-0 ma-0" fluid>
    <v-layout column>
      <v-toolbar dark>
        <v-btn icon @click="$router.go(-1)" class="mr-1">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title class="text-uppercase font-weight-bold">{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- Menu de tres pontos no canto superior direito do drawer -->
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list class="pa-0" dense>
            <template v-for="(item, i) in menu">
              <v-list-item :click="$router.push(`${item.path}`, { dados: item.dados})" :key="i">
                <v-list-item-content>
                  <v-list-item-title>{{item.nome}}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
              </v-list-item>
              <v-divider :key="i"></v-divider>
            </template>
          </v-list>
        </v-menu>
      </v-toolbar>

      <!-- imprime uma lista com os itens enviados do component onde foi importado -->
      <v-flex class="pa-2" xs12>
        <v-card class="pa-2">
          <slot name="form"></slot>
        </v-card>
      </v-flex>

      <!-- flex para adição de conteúdo personalidado, some caso não seja usada -->
      <v-flex class="pa-2" xs12>
        <v-card>
          <slot name="livre"></slot>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["title", "icon", "menu", "id"]
};
</script>