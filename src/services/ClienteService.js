import { http } from './config'

export default {
    listar: () => {
        return http.get('/v1/clientes')
    },
    salvar: (cliente) => {
        return http.post('/v1/clientes', cliente)
    },
    editar: (id) => {
        return http.get(`/v1/clientes/${id}`)
    },
    atualizar: (cliente) => {
        return http.put(`/v1/clientes/${cliente.id}`, cliente)
    },
    excluir: (id) => {
        return http.delete(`/v1/clientes/${id}`)
    }
}