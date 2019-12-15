import Listar from '@/pages/orcamento/Listar'
import Cadastro from '@/pages/orcamento/Cadastro'

export const orcamentosRoutes = [
    {
        path: '/orcamentos',
        name: 'orcamentos',
        component: Listar
    },
    {
        path: '/orcamento/cadastro',
        name: 'orcamentoCadastro',
        component: Cadastro,
    },
    {
        path: '/orcamento/:id/editar',
        name: 'orcamentoEditar',
        component: Cadastro,
        props: true
    },
    
]

export default{}