import Listar from '@/pages/cliente/Listar'
import Cadastro from '@/pages/cliente/Cadastro'

export const clientesRoutes = [
    {
        path: '/clientes',
        name: 'clientes',
        component: Listar
    },
    {
        path: '/cliente/cadastro',
        name: 'clienteCadastro',
        component: Cadastro,
    },
    {
        path: '/cliente/:id/editar',
        name: 'clienteEditar',
        component: Cadastro,
        props: true
    },
    
]

export default{}