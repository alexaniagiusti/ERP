<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="dadosProduto.descricao" outlined label="Descrição"></v-text-field>
                </v-col>

                <v-col cols="4">
                    <v-text-field v-model="dadosProduto.codigo_barra" outlined label="Código de Barras"></v-text-field>
                </v-col>

                <v-col cols="4">
                    <v-text-field v-model="dadosProduto.marca" outlined label="Marca"></v-text-field>
                </v-col>

                <v-col cols="4">
                    <v-text-field v-model="dadosProduto.referencia" outlined label="Referência"></v-text-field>
                </v-col>

                <v-col cols="4">
                    <v-text-field v-model="dadosProduto.preco_custo" outlined label="Preço de Custo"></v-text-field>
                </v-col>

                <v-col cols="4">
                    <v-text-field v-model="dadosProduto.margem_lucro" outlined label="Margem de Lucro"></v-text-field>
                </v-col>

                <v-col cols="4">
                    <v-text-field v-model="dadosProduto.preco_venda" outlined label="Preço de Venda"></v-text-field>
                </v-col>
                
            </v-row>
            <v-row>
                
            </v-row>
        </v-container>
    </v-form>
</template>

<script>

export default {
    data () {
        return{
            dadosProduto:{
                "descricao":"",
                "marca":"",
                "codigo_barra":"",
                "unidade":"",
                "referencia":"",
                "preco_custo":"",
                "margem_lucro":"",
                "preco_venda":"",
                "cfop":"",
                "cfop_fora_estado":"",
                "cest":"",
                "ncm":"",
                "estoque":"",
                "fornecedor_id":"",
                "secao_id":"",
                "grupo_id": ""
            }
        }
    }
}
</script>