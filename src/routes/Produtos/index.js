import Listar from '@/pages/produto/Listar'
import Cadastro from '@/pages/produto/Cadastro'

export const produtosRoutes = [
    {
        path: '/produtos',
        name: 'produtos',
        component: Listar
    },
    {
        path: '/produto/cadastro',
        name: 'produtoCadastro',
        component: Cadastro,
    },
    {
        path: '/produto/:id/editar',
        name: 'produtoEditar',
        component: Cadastro,
        props: true
    },
    
]

export default{}