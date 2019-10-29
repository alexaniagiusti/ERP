import Listar from '@/pages/fornecedor/Listar'
import Cadastro from '@/pages/fornecedor/Cadastro'

export const fornecedoresRoutes = [
    {
        path: '/fornecedores',
        name: 'fornecedores',
        component: Listar
    },
    {
        path: '/fornecedor/cadastro',
        name: 'fornecedorCadastro',
        component: Cadastro,
    },
    {
        path: '/fornecedor/:id/editar',
        name: 'fornecedorEditar',
        component: Cadastro,
        props: true
    },
    
]

export default{}