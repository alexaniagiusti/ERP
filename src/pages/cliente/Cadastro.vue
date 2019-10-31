<template>
    <v-layout>
        <v-flex>
            <v-toolbar flat>
                <h3 class="font-weight-light black--text">Cadastro de Cliente</h3>
            </v-toolbar>
            <v-col cols="12" md="12" xs="12">
                <v-card outlined>
                    <v-card-text>
                        <v-row>
                            <v-col  cols="12" md="12">
                                <v-text-field outlined v-model="cliente.nome" label="Nome" :rules="rules.nome"></v-text-field>	
                            </v-col>
                            <!-- <v-col cols="12" md="6" xs="12">
                                <v-text-field outlined v-model="cliente.nome_fantasia" label="Nome Fantasia"></v-text-field>	
                            </v-col> -->
                            <v-col cols="12" md="6">
                                <v-text-field outlined v-mask="'##.###.###/####-##'" v-model="cliente.cnpj" label="CNPJ"></v-text-field>	
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field outlined v-model="cliente.ie" label="IE"></v-text-field>	
                                <v-row>
                                </v-row>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-text-field outlined v-mask="'###.###.###-##'" v-model="cliente.cpf" label="CPF"></v-text-field>	
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field outlined v-model="cliente.rg" label="RG"></v-text-field>	
                                <v-row>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="2">
                                <v-text-field outlined v-mask="'#####-###'" v-model="cliente.cep" label="CEP" @blur="pesquisaCep"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field outlined v-model="cliente.logradouro" label="Logradouro"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3">
                                <v-text-field outlined v-model="cliente.numero" id="numero" label="Número"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3">
                                <v-text-field outlined v-model="cliente.referencia_endereco" label="Referência"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field outlined v-model="cliente.bairro" label="Bairro"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field outlined v-model="cliente.cidade" label="Cidade"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field outlined v-model="cliente.uf" label="UF"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="3" xs="12">
                                <v-text-field outlined v-mask="'(##) ####-####'" v-model="cliente.telefone" label="Telefone"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3" xs="12">
                                <v-text-field outlined v-mask="'(##) #####-####'" v-model="cliente.celular1" label="Celular 1"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3" xs="12">
                                <v-text-field outlined v-mask="'(##) #####-####'" v-model="cliente.celular2" label="Celular 2"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3" xs="12">
                                <v-text-field outlined v-model="cliente.email" label="E-mail"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="12" md="12">
                                <v-btn color="success" @click="salvar">Salvar</v-btn>
                                <v-btn v-if="$route.params.id" color="primary" @click="cadastrar">Novo</v-btn>
                                <v-btn v-if="$route.params.id" color="error" @click.stop="modalExcluir = true">Excluir</v-btn>
                                <v-btn class="white--text" color="blue-grey" @click="$router.push({'name': 'clientes'})">Voltar</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-flex>
        
        <v-dialog v-model="modalExcluir" max-width="290">
            <v-card>
                <v-card-title class="headline">Exclusão</v-card-title>
                
                <v-card-text>
                    Tem certeza que deseja excluir este registro?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    
                    <v-btn
                    color="green darken-1"
                    text
                    @click="modalExcluir = false"
                    >
                    NÃO
                </v-btn>
                
                <v-btn
                color="green darken-1"
                text
                @click="excluir"
                >
                SIM
            </v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</v-layout>
</template>

<script>
    import Cliente from '@/services/ClienteService'

    export default {
        data(){
            return {
                cliente: {
                    id: "",
                    nome: "",
                    cnpj: "",
                    ie: "",
                    cep: "",
                    logradouro: "",
                    numero: "",
                    bairro: "",
                    cidade: "",
                    uf: "",
                    referencia_endereco: "",
                    telefone: "",
                    celular1: "",
                    celular2: "",
                },
                rules: {
                    nome: [
                    v => !!v || 'Campo obrigatório.'
                    ],
                },
                modalExcluir: false
                
            }
        },
        methods: {
            salvar(){
                if(this.cliente.id){
                    Cliente.atualizar(this.cliente)
                    .then(res => {
                        this.$toastr.success('Cadastro atualizado', 'Sucesso');

                    })
                    .catch(err => console.log(err))
                }else{
                    Cliente.salvar(this.cliente)
                    .then(res => {
                        this.cliente = {}
                        this.$toastr.success('Cadastro efetuado', 'Sucesso');
                    })
                    .catch(err => console.log(err))
                }
            },
            editar() {
                Cliente.editar(this.$route.params.id)
                .then(res => {
                    this.cliente = res.data
                })
                .catch(err => console.log(err))
            },
            cadastrar(){
                this.$router.push({'name': 'clienteCadastro'})
                this.cliente = {}
            },
            excluir(){
                Cliente.excluir(this.cliente.id)
                .then(res => {
                    this.$router.push({'name': 'clientees'})
                    this.$toastr.error('Registro excluído');
                })
                .cache()
            },
            pesquisaCep(){
                this.$http.get(`https://viacep.com.br/ws/${this.cliente.cep}/json/`)
                .then(res => {
                    this.cliente.logradouro = res.data.logradouro
                    this.cliente.bairro = res.data.bairro
                    this.cliente.cidade = res.data.localidade
                    this.cliente.uf = res.data.uf
                    document.getElementById("numero").focus();
                })
                .catch(err => alert('CEP Inválido.'))
            }
        },
        mounted(){
            if(this.$route.params.id){
                this.editar()
            }

        }
    }
</script>