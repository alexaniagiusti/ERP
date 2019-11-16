import { http } from './config'

export default {
    listar: () => {
        return http.get('/v1/fornecedores')
    },
    salvar: (fornecedor) => {
        return http.post('/v1/fornecedores', fornecedor)
    },
    editar: (id) => {
        return http.get(`/v1/fornecedores/${id}`)
    },
    atualizar: (fornecedor) => {
        return http.put(`/v1/fornecedores/${fornecedor.id}`, fornecedor)
    },
    excluir: (id) => {
        return http.delete(`/v1/fornecedores/${id}`)
    }
}