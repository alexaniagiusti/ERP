<template>
    <v-layout>
        <v-flex>
            <v-toolbar flat>
                <h3 class="font-weight-light black--text">Cadastro de Produto</h3>
            </v-toolbar>
            <v-col cols="12" md="12" xs="12">
                <v-card outlined>
                    <v-card-title>
                        <v-flex xs12>
                            <v-tabs
                            app
                            grow
                            v-model="tabs"
                            class="hidden-sm-and-down"
                            >
                            <v-tab>
                                <span>GERAL</span>
                            </v-tab>
                            
                            <v-tab>
                                <span>PREÇO DE VENDA</span>
                            </v-tab>
                            
                            <v-tab>
                                <span>INFORMAÇÕES FISCAIS</span>
                            </v-tab>
                        </v-tabs>
                    </v-flex>
                </v-card-title>
                
                <v-divider></v-divider>
                <v-card-text>
                    <v-flex xs12>
                        <v-tabs-items v-model="tabs">
                            <!-- informações gerais -->
                            <v-tab-item>
                                <v-row>
                                    <v-col  cols="12" md="12">
                                        <v-text-field outlined v-model="produto.descricao" label="Descrição" :rules="rules.descricao"></v-text-field>	
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field outlined v-model="produto.codigo_barra" label="Código de Barras"></v-text-field>	
                                    </v-col>
                                    <v-col cols="12" md="6" xs="12">
                                        <v-autocomplete
                                        label="Marca"
                                        :items="marcas"
                                        item-text="marca"
                                        item-value="marca"
                                        v-model="produto.marca"
                                        outlined
                                        append-outer-icon="control_point"
                                        @click:append-outer="cadastrarMarca"
                                        ></v-autocomplete>
                                        <!-- <v-text-field outlined v-model="produto.marca" label="Marca"></v-text-field>	 -->
                                    </v-col>
                                    <v-col col="12" md="2">
                                        <v-select
                                        :items="unidades"
                                        item-text="unidade"
                                        item-value="unidade"
                                        label="UN"
                                        v-model="produto.unidade"
                                        outlined
                                        append-outer-icon="control_point"
                                        @click:append-outer="cadastrarUnidade"
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-text-field outlined v-model="produto.referencia" label="Referência"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="3">
                                        <v-select
                                        :items="grupos"
                                        item-text="grupo"
                                        item-value="id"
                                        label="Grupo"
                                        v-model="produto.grupo_id"
                                        outlined
                                        append-outer-icon="control_point"
                                        @click:append-outer="cadastrarGrupo"
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" md="3">
                                        <v-select
                                        :items="secoes"
                                        item-text="secao"
                                        item-value="id"
                                        label="Seção"
                                        outlined
                                        v-model="produto.secao_id"
                                        append-outer-icon="control_point"
                                        @click:append-outer="cadastrarSecao"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </v-tab-item>
                            <!-- informações gerais -->
                            
                            <!-- preço de venda -->
                            <v-tab-item>
                                <v-row>
                                    <v-col  cols="12" md="4">
                                        <v-text-field type="number" outlined v-model="produto.preco_custo" label="Preço de Custo" :rules="rules.preco_custo"></v-text-field>	
                                    </v-col>
                                    <v-col  cols="12" md="4">
                                        <v-text-field type="number" outlined v-model="produto.margem_lucro" @blur="margemLucro" label="Margem de Lucro" :rules="rules.margem_lucro"></v-text-field>	
                                    </v-col>
                                    <v-col  cols="12" md="4">
                                        <v-text-field type="number" outlined v-model="produto.preco_venda" label="Preço de Venda" :rules="rules.preco_venda"></v-text-field>	
                                    </v-col>
                                </v-row>
                            </v-tab-item>
                            <!-- preco de venda -->
                            
                            <!-- informações fiscais -->
                            <v-tab-item>
                                <v-row>
                                    <v-col  cols="12" md="6">
                                        <v-text-field outlined v-model="produto.ncm" v-mask="'########'" label="Código NCM" :rules="rules.ncm"></v-text-field>	
                                    </v-col>
                                    <v-col  cols="12" md="6">
                                        <v-text-field outlined v-model="produto.cest" v-mask="'#######'" label="Código CEST" :rules="rules.cest"></v-text-field>	
                                    </v-col>
                                    <v-col  cols="12" md="6">
                                        <v-text-field outlined v-model="produto.cfop" v-mask="'#.###'" label="CFOP" :rules="rules.cfop"></v-text-field>	
                                    </v-col>
                                    <v-col  cols="12" md="6">
                                        <v-text-field outlined v-model="produto.cfop_fora_estado" v-mask="'#.###'" label="CFOP fora do Estado"></v-text-field>	
                                    </v-col>
                                </v-row>         
                            </v-tab-item>
                            <!-- informações -->
                        </v-tabs-items>
                    </v-flex>
                </v-card-text>
                
                <v-card-actions>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-btn color="success" @click="salvar">Salvar</v-btn>
                            <v-btn v-if="$route.params.id" color="primary" @click="cadastrar">Novo</v-btn>
                            <v-btn v-if="$route.params.id" color="error" @click.stop="modalExcluir = true">Excluir</v-btn>
                            <v-btn class="white--text" color="blue-grey" @click="$router.push({'name': 'produtos'})">Voltar</v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-flex>

    <v-dialog v-model="modalCadastrarMarcas" max-width="290">
            <v-card>
                <v-card-title class="headline">Cadastrar Marca</v-card-title>
                
                <v-card-text>
                    <v-row>
                        <v-col  cols="12" md="12">
                            <v-text-field outlined v-model="marca.marca" label="Marca" :rules="rules.marca"></v-text-field>	
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    
                    <v-btn
                    color="error"
                    @click="modalCadastrarMarcas = false"
                    >
                    NÃO
                </v-btn>
                
                <v-btn
                color="success"
                @click="salvarMarca"
                >
                SALVAR
            </v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>
    
    <v-dialog v-model="modalCadastrarUniadades" max-width="290">
        <v-card>
            <v-card-title class="headline">Cadastrar Unidade de Medida</v-card-title>
            
            <v-card-text>
                <v-row>
                    <v-col  cols="12" md="12">
                        <v-text-field outlined v-model="unidade.unidade" label="Unidade de Medida" :rules="rules.unidade"></v-text-field>	
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                
                <v-btn
                color="error"
                @click="modalCadastrarUniadades = false"
                >
                NÃO
            </v-btn>
            
            <v-btn
            color="success"
            @click="salvarUnidade"
            >
            SALVAR
        </v-btn>
    </v-card-actions>
</v-card>
</v-dialog>

<v-dialog v-model="modalCadastrarGrupos" max-width="290">
    <v-card>
        <v-card-title class="headline">Cadastrar Grupo</v-card-title>
        
        <v-card-text>
            <v-row>
                <v-col  cols="12" md="12">
                    <v-text-field outlined v-model="grupo.grupo" label="Grupo" :rules="rules.grupo"></v-text-field>	
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            
            <v-btn
            color="error"
            @click="modalCadastrarGrupos = false"
            >
            NÃO
        </v-btn>
        
        <v-btn
        color="success"
        @click="salvarGrupo"
        >
        SALVAR
    </v-btn>
</v-card-actions>
</v-card>
</v-dialog>

<v-dialog v-model="modalCadastrarSecoes" max-width="290">
    <v-card>
        <v-card-title class="headline">Cadastrar Seção</v-card-title>
        
        <v-card-text>
            <v-row>
                <v-col  cols="12" md="12">
                    <v-text-field outlined v-model="secao.secao" label="Seção" :rules="rules.secao"></v-text-field>	
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            
            <v-btn
            color="error"
            @click="modalCadastrarSecoes = false"
            >
            NÃO
        </v-btn>
        
        <v-btn
        color="success"
        @click="salvarSecao"
        >
        SALVAR
    </v-btn>
</v-card-actions>
</v-card>
</v-dialog>
</v-layout>
</template>

<script>
    import Produto from '@/services/ProdutoService'
    import Unidade from '@/services/UnidadeMedidaService'
    import Grupo from '@/services/GrupoProdutoService'
    import Secao from '@/services/SecaoProdutoService'
    import Marca from '@/services/MarcaService'
    
    export default {
        data () {
            return {
                produto:{
                    id: "",
                    descricao: "",
                    marca: "",
                    codigo_barra: "",
                    unidade: "",
                    referencia: "",
                    preco_custo: "",
                    margem_lucro: "",
                    preco_venda: "",
                    cfop: "5.102",
                    cfop_fora_estado: "6.102",
                    cest: "",
                    ncm: "",
                    fornecedor_id: "",
                    secao_id: "",
                    grupo_id: "",
                },
                marca: {
                    marca: ''
                },
                unidade: {
                    unidade: ''
                },
                grupo: {
                    grupo: ''
                },
                secao: {
                    secao: ''
                },
                unidades: [],
                grupos: [],
                secoes: [],
                marcas: [],
                modalCadastrarUniadades: false,
                modalCadastrarGrupos: false,
                modalCadastrarSecoes: false,
                modalCadastrarMarcas: false,
                rules : {
                    descricao: [
                    v => !!v || 'Campo obrigatório.'
                    ],
                    unidade: [
                    v => !!v || 'Campo obrigatório.'
                    ],
                    marca: [
                    v => !!v || 'Campo obrigatório.'
                    ],
                    grupo: [
                    v => !!v || 'Campo obrigatório.'
                    ],
                    secao: [
                    v => !!v || 'Campo obrigatório.'
                    ],
                    preco_venda: [
                    v => !!v || 'Campo obrigatório.'
                    ],
                    ncm: [
                    v => !!v || 'Campo obrigatório.'
                    ],
                    cest: [
                    v => !!v || 'Campo obrigatório.'
                    ],
                    cfop: [
                    v => !!v || 'Campo obrigatório.'
                    ],
                },
                tabs: 0,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        },
        methods: {
            salvar(){
                if(this.produto.id){
                    Produto.atualizar(this.produto)
                    .then(res => {
                        this.$toastr.warning('Produto atualizado.')
                    })
                    .catch(e => console.log(e))
                }else{
                    Produto.salvar(this.produto)
                    .then(res => {
                        this.$toastr.success('Produto cadastrado com sucesso.')
                        this.$router.push({name: 'produtoEditar', params : {id: res.data.id}})
                    })
                    .catch(e => console.log(e))
                }
                
            },
            cadastrar(){
                this.$router.push({name: 'produtoCadastro'});
                this.produto = {}
            },
            editar(){
                Produto.editar(this.$route.params.id)
                .then(res => {
                    this.produto =  res.data
                })
                .catch(e => console.log(e))
            },

            //Marcas
            listarMarcas(){
                Marca.listar()
                .then(res => {
                    this.marcas = res.data
                })
                .catch(e => console.log(e))
            },
            cadastrarMarca(){
                this.modalCadastrarMarcas = true
            },
            salvarMarca(){
                Marca.salvar(this.marca)
                .then(res => {
                    this.modalCadastrarMarcas = false
                    this.listarMarcas()
                    this.$toastr.success('Marca cadastrada com sucesso.')
                    this.marca = {}
                })
                .catch(e => console.log(e))
            },
            
            //Unidades
            listarUnidades(){
                Unidade.listar()
                .then(res => {
                    this.unidades = res.data
                })
                .catch(e => console.log(e))
            },
            cadastrarUnidade(){
                this.modalCadastrarUniadades = true
            },
            salvarUnidade(){
                Unidade.salvar(this.unidade)
                .then(res => {
                    this.modalCadastrarUniadades = false
                    this.listarUnidades()
                    this.$toastr.success('Uniade de medida cadastrada com sucesso.')
                    this.unidade = {}
                })
                .catch(e => console.log(e))
            },
            
            //grupos
            listarGrupos(){
                Grupo.listar()
                .then(res => {
                    this.grupos = res.data
                })
                .catch(e => console.log(e))
            },
            cadastrarGrupo(){
                this.modalCadastrarGrupos = true
            },
            salvarGrupo(){
                Grupo.salvar(this.grupo)
                .then(res => {
                    this.$toastr.success('Grupo cadastrado com sucesso.')
                    this.modalCadastrarGrupos = false
                    this.listarGrupos()
                    this.grupo = {}
                })
                .catch(e => console.log(e))
            },
            
            //seções
            listarSecoes(){
                Secao.listar()
                .then(res => {
                    this.secoes = res.data
                })
                .catch(e => console.log(e))
            },
            cadastrarSecao(){
                this.modalCadastrarSecoes = true
            },
            salvarSecao(){
                Secao.salvar(this.secao)
                .then(res => {
                    this.$toastr.success('Seção cadastrada com sucesso.')
                    this.modalCadastrarSecoes = false
                    this.listarSecoes()
                    this.secao = {}
                })
            },
            
            margemLucro(){
                let porcentagem = (parseFloat(this.produto.margem_lucro) / 100) * parseFloat(this.produto.preco_custo);
                this.produto.preco_venda = parseFloat(this.produto.preco_custo) + parseFloat(porcentagem)
            }
        },
        mounted(){
            this.listarMarcas();
            this.listarUnidades();
            this.listarGrupos();
            this.listarSecoes();
            if(this.$route.params.id){
                this.editar()
            }
        }
    }
</script>