<template>
    <v-layout>
        <v-flex>
            <v-toolbar flat>
                <h3 class="font-weight-light black--text">Cadastro de Fornecedor</h3>
            </v-toolbar>
            <v-col cols="12" md="12" xs="12">
                <v-card outlined>
                    <v-card-text>
                        <v-row>
                            <v-col  cols="12" md="6">
                                <v-text-field outlined v-model="fornecedor.nome" label="Nome" :rules="rules.nome"></v-text-field>	
                            </v-col>
                            <v-col cols="12" md="6" xs="12">
                                <v-text-field outlined v-model="fornecedor.nome_fantasia" label="Nome Fantasia"></v-text-field>	
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field outlined v-mask="'##.###.###/####-##'" v-model="fornecedor.cnpj" label="CNPJ"></v-text-field>	
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field outlined v-model="fornecedor.ie" label="IE"></v-text-field>	
                                <v-row>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="2">
                                <v-text-field outlined v-mask="'#####-###'" v-model="fornecedor.cep" label="CEP" @blur="pesquisaCep"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field outlined v-model="fornecedor.logradouro" label="Logradouro"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3">
                                <v-text-field outlined v-model="fornecedor.numero" id="numero" label="Número"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3">
                                <v-text-field outlined v-model="fornecedor.referencia_endereco" label="Referência"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field outlined v-model="fornecedor.bairro" label="Bairro"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field outlined v-model="fornecedor.cidade" label="Cidade"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field outlined v-model="fornecedor.uf" label="UF"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="3" xs="12">
                                <v-text-field outlined v-mask="'(##) ####-####'" v-model="fornecedor.telefone" label="Telefone"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3" xs="12">
                                <v-text-field outlined v-mask="'(##) #####-####'" v-model="fornecedor.celular1" label="Celular 1"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3" xs="12">
                                <v-text-field outlined v-mask="'(##) #####-####'" v-model="fornecedor.celular2" label="Celular 2"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3" xs="12">
                                <v-text-field outlined v-model="fornecedor.email" label="E-mail"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="12" md="12">
                                <v-btn color="success" @click="salvar">Salvar</v-btn>
                                <v-btn v-if="$route.params.id" color="primary" @click="cadastrar">Novo</v-btn>
                                <v-btn v-if="$route.params.id" color="error" @click.stop="modalExcluir = true">Excluir</v-btn>
                                <v-btn class="white--text" color="blue-grey" @click="$router.push({'name': 'fornecedores'})">Voltar</v-btn>
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
    import Fornecedor from '@/services/FornecedorService'

    export default {
        data(){
            return {
                fornecedor: {
                    id: "",
                    nome: "",
                    nome_fantasia: "",
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
                if(this.fornecedor.id){
                    Fornecedor.atualizar(this.fornecedor)
                    .then(res => {
                        this.$toastr.warning('Fornecedor atualizado.')
                        this.$toastr.success('Cadastro atualizado', 'Sucesso');

                    })
                    .catch(err => console.log(err))
                }else{
                    Fornecedor.salvar(this.fornecedor)
                    .then(res => {
                        this.fornecedor = {}
                        this.$toastr.success('Cadastro efetuado.', 'Sucesso');
                    })
                    .catch(err => console.log(err))
                }
            },
            editar() {
                Fornecedor.editar(this.$route.params.id)
                .then(res => {
                    this.fornecedor = res.data
                })
                .catch(err => console.log(err))
            },
            cadastrar(){
                this.$router.push({'name': 'fornecedorCadastro'})
                this.fornecedor = {}
            },
            excluir(){
                Fornecedor.excluir(this.fornecedor.id)
                .then(res => {
                    this.$router.push({'name': 'fornecedores'})
                    this.$toastr.error('Registro excluído');
                })
                .cache()
            },
            pesquisaCep(){
                this.$http.get(`https://viacep.com.br/ws/${this.fornecedor.cep}/json/`)
                .then(res => {
                    this.fornecedor.logradouro = res.data.logradouro
                    this.fornecedor.bairro = res.data.bairro
                    this.fornecedor.cidade = res.data.localidade
                    this.fornecedor.uf = res.data.uf
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