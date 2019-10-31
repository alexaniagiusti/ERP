import { http } from './config'

export default {
    listar: () => {
        return http.get('/v1/produtos')
    },
    salvar: (produto) => {
        return http.post('/v1/produtos', produto)
    },
    editar: (id) => {
        return http.get(`/v1/produtos/${id}`)
    },
    atualizar: (produto) => {
        return http.put(`/v1/produtos/${produto.id}`, produto)
    },
    excluir: (id) => {
        return http.delete(`/v1/produtos/${id}`)
    }
}