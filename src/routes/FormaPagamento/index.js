import Listar from '@/pages/formaPagamento/Listar'
import Cadastro from '@/pages/formaPagamento/Cadastro'

export const formaPagamentoRoutes = [
    {
        path: '/formas-pagamentos',
        name: 'formasPagamentos',
        component: Listar
    },
    {
        path: '/forma-pagamento/cadastro',
        name: 'formaPagamentoCadastro',
        component: Cadastro,
    },
    {
        path: '/forma-pagamento/:id/editar',
        name: 'formaPagamentoEditar',
        component: Cadastro,
        props: true
    },
    
]

export default{}