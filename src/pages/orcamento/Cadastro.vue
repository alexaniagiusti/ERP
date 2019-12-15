<template>
    <v-layout>
        <v-flex>
            <v-toolbar flat>
                <h3 class="font-weight-light black--text">Orçamento</h3>
            </v-toolbar>
            <v-col cols="12" md="12">
                <v-card outlined>
                    <v-card-title>Pesquisar Produtos</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col md="2">
                                <v-text-field outlined v-model="codigo_barras" label="Código de Barras"></v-text-field>	
                            </v-col>
                            <v-col md="4">
                                <v-autocomplete
                                label="Produto"
                                :items="produtos"
                                item-text="descricao"
                                item-value="id"
                                outlined
                                v-model="item.produto_id"
                                >
                                    <template v-slot:selection="data">{{data.item.id}} - {{data.item.descricao}} - {{data.item.marca}}</template>
                                    <template v-slot:item="data">{{data.item.id}} - {{data.item.descricao}} - {{data.item.marca}}</template>
                                </v-autocomplete>	
                            </v-col>
                            <v-col md="2">
                                <v-text-field outlined v-model="item.preco" label="P. Unit."></v-text-field>	
                            </v-col>
                            <v-col md="2">
                                <v-text-field outlined v-model="quantidade" label="Quantidade" id="quantidade"></v-text-field>	
                            </v-col>
                            <v-col md="2">
                                <v-text-field outlined v-model="item.total" label="Vr. Total"></v-text-field>	
                            </v-col>
                            <v-col cols="12" md="12">
                                <v-btn class="primary" @click="addItemOrcamento" block>INSERIR PRODUTO</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions></v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" md="12">
                <v-card outlined>
                    <v-card-title>Produtos no Orçamento</v-card-title>
                    <v-card-text>
                        <v-simple-table fixed-header height="300px">
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">Código</th>
                                  <th class="text-left">Descrição</th>
                                  <th class="text-left">P. Unit.</th>
                                  <th class="text-left">Quantidade</th>
                                  <th class="text-left">Vr. Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="p in orcamento.itens" :key="p">
                                  <td>{{ p.produto_id }}</td>
                                  <td>{{ p.descricao }}</td>
                                  <td>{{ p.preco }}</td>
                                  <td>{{ p.quantidade }}</td>
                                  <td>{{ p.total }}</td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-flex>
    </v-layout>
</template>

<script>
import Orcamento from '@/services/OrcamentoService'
import Produto from '@/services/ProdutoService'

export default{
    data(){
        return{
            produtos: [],
            item: {
                produto_id: "",
                descricao: "",
                preco: "",
                quantidade: "",
                desconto: "",
                total: "",
            },
            
            codigo_barras: "",
            quantidade:"",
            orcamento:{
                subtotal: 0,
                desconto: 0,
                total: 0,
                cliente_id: 1,
                itens:[]
            }
        }
    },
    watch:{
        codigo_barras : function(){
            if(this.codigo_barras.length > 0){
                setTimeout(() => this.buscarPorCodigoDeBarras(), 1000)
                // this.buscarPorCodigoDeBarras()
            }   
        },
        quantidade : function() {
            this.somaTotalItem()
        }
        
    },
    methods:{
        listarProdutos(){
            Produto.listar()
            .then(res => {
                this.produtos = res.data
                console.log(this.produtos)
            })
            .catch(e => console.log(e))
        },
        buscarPorCodigoDeBarras(){
            Produto.porCodigoDeBarras(this.codigo_barras)
            .then(res => {
                
                if(res.data){
                    this.item.produto_id =  res.data.id
                    this.item.preco =  res.data.preco_venda
                    this.item.descricao = res.data.descricao
                    this.quantidade = 1
                    document.getElementById("quantidade").focus()
                }else{
                    this.$toastr.error('Produto não encontrado.')
                }
            })
            .catch()
        },
        preencherDadosItem(item){
            
        },
        somaTotalItem(){
            this.item.total = this.quantidade * this.item.preco
        },
        addItemOrcamento(){
            this.item.quantidade = this.quantidade
            const produtos = this.item
            console.log(produtos)
            this.orcamento.itens.push(produtos)
            // this.item.produto_id = ""
            // this.item.descricao = ""
            // this.item.preco = ""
            // this.item.quantidade = ""
            // this.item.desconto = ""
            // this.item.total = ""
            // this.codigo_barras = ""
            console.log(this.orcamento.itens)
        },
        
    },
    created(){
        this.listarProdutos()
    }
}
</script>