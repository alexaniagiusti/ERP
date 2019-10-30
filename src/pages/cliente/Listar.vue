<template>
    <v-layout>
        <v-flex>
            <v-toolbar flat>
                <h3 class="font-weight-light black--text">Clientes</h3>
            </v-toolbar>
            <v-card>
                <v-card-title>
                    <v-btn color="primary" @click="$router.push({'name': 'clienteCadastro'})">Cadastrar</v-btn>
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
                    :items="clientes"
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
    import Cliente from '@/services/ClienteService'
    
    export default {
        data () {
            return {
                search: '',
                headers: [
                { text: '#', value: 'id', sortable: false },
                {
                    text: 'Nome',
                    align: 'left',
                    sortable: false,
                    value: 'nome',
                },
                // { text: 'Nome Fantasia', value: 'nome_fantasia' },
                { text: 'CNPJ', value: 'cnpj' },
                { text: 'CPF', value: 'cpf' },
                { text: 'Ações', value: 'action', sortable: false }
                ],
                clientes: [],
            }
        },
        methods:{
            listar(){
                Cliente.listar()
                .then(res => {
                    this.clientes = res.data
                })
                .catch(err => console.log(err))
            },
            editar(item){
                this.$router.push({'name': 'clienteEditar', 'params': {'id': item}});
            }
        },
        created(){
            this.listar();
        }
    }
</script>