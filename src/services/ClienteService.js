import { http } from './config'

export default {
    listar: () => {
        return http.get('/v1/clientes')
    },
    salvar: (fornecedor) => {
        return http.post('/v1/clientes', fornecedor)
    },
    editar: (id) => {
        return http.get(`/v1/clientes/${id}`)
    },
    atualizar: (fornecedor) => {
        return http.put(`/v1/clientes/${fornecedor.id}`, fornecedor)
    },
    excluir: (id) => {
        return http.delete(`/v1/clientes/${id}`)
    }
}