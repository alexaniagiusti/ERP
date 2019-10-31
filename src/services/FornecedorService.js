import { http } from './config'

export default {
    listar: () => {
        return http.get('/v1/produtos')
    },
    salvar: (fornecedor) => {
        return http.post('/v1/produtos', fornecedor)
    },
    editar: (id) => {
        return http.get(`/v1/produtos/${id}`)
    },
    atualizar: (fornecedor) => {
        return http.put(`/v1/produtos/${fornecedor.id}`, fornecedor)
    },
    excluir: (id) => {
        return http.delete(`/v1/produtos/${id}`)
    }
}