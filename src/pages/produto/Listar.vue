<template>
    <v-layout>
        <v-flex>
            <v-toolbar flat>
                <h3 class="font-weight-light black--text">Produtos</h3>
            </v-toolbar>
            <v-card>
                <v-card-title>
                    <v-btn color="primary" @click="$router.push({'name': 'produtoCadastro'})">Cadastrar</v-btn>
                    <v-spacer></v-spacer>
                    <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Pesquisar"
                    single-line
                    hide-details
                    ></v-text-field>
                </v-card-title>
                <v-card-text>
                    <v-data-table
                    :headers="headers"
                    :items="produtos"
                    :search="search"
                    >
                        <template v-slot:item.action="{ item }">
                            <v-btn class="primary" small @click="editar(item.id)">Editar</v-btn>
                        </template>
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Produto from '@/services/ProdutoService'
    
    export default {
        data () {
            return {
                search: '',
                headers: [
                { text: '#', value: 'id', sortable: true },
                {
                    text: 'Descrição',
                    align: 'left',
                    sortable: true,
                    value: 'descricao',
                },
                // { text: 'Nome Fantasia', value: 'nome_fantasia' },
                { text: 'Preço de Venda', value: 'preco_venda' },
                { text: 'Marca', value: 'marca' },
                { text: 'Ações', value: 'action', sortable: false }
                ],
                produtos: [],
            }
        },
        methods:{
            listar(){
                Produto.listar()
                .then(res => {
                    this.produtos = res.data
                })
                .catch(err => console.log(err))
            },
            editar(item){
                this.$router.push({'name': 'produtoEditar', 'params': {'id': item}});
            }
        },
        created(){
            this.listar();
        }
    }
</script>