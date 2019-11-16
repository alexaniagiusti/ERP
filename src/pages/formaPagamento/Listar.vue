<template>
    <v-layout>
        <v-flex>
            <v-toolbar flat>
                <h3 class="font-weight-light black--text">Forma de Pagamentos</h3>
            </v-toolbar>
            <v-card>
                <v-card-title>
                    <v-btn color="primary" @click="$router.push({'name': 'formaPagamentoCadastro'})">Cadastrar</v-btn>
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
                    :items="formasPagamentos"
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
    import FormaPagamento from '@/services/FormaPagamentoService'
    
    export default {
        data () {
            return {
                search: '',
                headers: [
                { text: '#', value: 'id', sortable: false },
                {
                    text: 'Descrição',
                    align: 'left',
                    sortable: false,
                    value: 'nome',
                },
                
                { text: 'Ações', value: 'action', sortable: false }
                ],
                formasPagamentos: [],
            }
        },
        methods:{
            listar(){
                FormaPagamento.listar()
                .then(res => {
                    this.formasPagamentos = res.data
                })
                .catch(err => console.log(err))
            },
            editar(item){
                this.$router.push({'name': 'formaPagamentoEditar', 'params': {'id': item}});
            }
        },
        created(){
            this.listar();
        }
    }
</script>