<template>
    <v-layout>
        <v-flex>
            <v-toolbar flat>
                <h3 class="font-weight-light black--text">Cadastro de Forma de Pagamento</h3>
            </v-toolbar>
            <v-col cols="12" md="12" xs="12">
                <v-card outlined>
                    <v-card-text>
                        <v-row>
                            <v-col  cols="12" md="4">
                                <v-text-field outlined v-model="formaPagamento.nome" label="Descrição" :rules="rules.required"></v-text-field>	
                            </v-col>
                            <v-col  cols="12" md="4">
                                <v-text-field outlined v-model="formaPagamento.acrescimo" label="Acréscimo"></v-text-field>	
                            </v-col>
                            <v-col  cols="12" md="4">
                                <v-text-field outlined type="number" v-model="formaPagamento.dia_fixo" label="Dia de vencimento fixo"></v-text-field>	
                            </v-col>
                            <v-col  cols="12" md="4">
                                <v-text-field outlined type="number" v-model="formaPagamento.numero_parcelas" label="Números de parcelas"></v-text-field>	
                            </v-col>
                            <v-col  cols="12" md="4">
                                <v-text-field outlined type="number" v-model="formaPagamento.intervalo" label="Dias de intervalo entre parcelas"></v-text-field>	
                            </v-col>
                            <v-col  cols="12" md="4">
                                <v-text-field outlined type="number" v-model="formaPagamento.primeira_parcela" label="Pimeira parcela"></v-text-field>	
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="12" md="12">
                                <v-btn color="success" @click="salvar">Salvar</v-btn>
                                <v-btn v-if="$route.params.id" color="primary" @click="cadastrar">Novo</v-btn>
                                <v-btn v-if="$route.params.id" color="error" @click.stop="modalExcluir = true">Excluir</v-btn>
                                <v-btn class="white--text" color="blue-grey" @click="$router.push({'name': 'formasPagamentos'})">Voltar</v-btn>
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
                    color="primary"
                    @click="modalExcluir = false"
                    >
                    NÃO
                </v-btn>
                
                <v-btn
                color="error"
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
    import FormaPagamento from "@/services/FormaPagamentoService"
    export default{
        data() {
            return {
                formaPagamento: {
                    id: "",
                    nome: "",
                    acrescimo: "",
                    numero_parcelas: "",
                    primeira_parcela: "",
                    dia_fixo: "",
                    intervalo: "",
                },
                modalExcluir: false,
                rules: {
                    nome: [
                    v => !!v || 'Campo obrigatório.'
                    ],
                },
            }
        },
        methods:{
            editar(){
                this.$store.commit('setVueLoad', true)
                FormaPagamento.editar(this.$route.params.id)
                .then(res => {
                    this.formaPagamento = res.data
                    this.$store.commit('setVueLoad', false)
                })
                .catch(e => console.log(e))
            },
            salvar(){
                this.$store.commit('setVueLoad', true)
                if(this.$route.params.id){
                    FormaPagamento.atualizar(this.formaPagamento)
                    .then(res => {
                        this.$toastr.success('Registro atualizado.')
                        this.$store.commit('setVueLoad', false)
                    })
                }else{
                    FormaPagamento.salvar(this.formaPagamento)
                    .then(res => {
                        this.$toastr.success('Registro salvo.')
                        this.$store.commit('setVueLoad', false)
                        this.$router.push({name: 'formaPagamentoEditar', params: {id: res.data.id}})

                    })
                }
            },
            cadastrar(){
                this.formaPagamento = {}
                this.$router.push({name: 'formaPagamentoCadastro'})
            },
            excluir(){
                this.$store.commit('setVueLoad', true)
                FormaPagamento.excluir(this.formaPagamento.id)
                .then(res => {
                    this.$toastr.error('Registro excluído.')
                    this.$router.push({name: 'formasPagamentos'})
                    this.$store.commit('setVueLoad', false)
                })
                .catch(e => console.log(e))
            }
        },
        created(){
            if(this.$route.params.id){
                this.editar()
            } 
        }
    }
</script>