import { http } from './config'

export default {
    listar: () => {
        return http.get('/v1/orcamentos')
    },
    salvar: (orcamento) => {
        return http.post('/v1/orcamentos', orcamento)
    },
    editar: (id) => {
        return http.get(`/v1/orcamentos/${id}`)
    },
    atualizar: (orcamento) => {
        return http.put(`/v1/orcamentos/${orcamento.id}`, orcamento)
    },
    excluir: (id) => {
        return http.delete(`/v1/orcamentos/${id}`)
    }
}