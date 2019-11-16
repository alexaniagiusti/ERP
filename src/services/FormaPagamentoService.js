import { http } from './config'

export default {
    listar: () => {
        return http.get('/v1/formas-pagamentos')
    },
    salvar: (formaPagamento) => {
        return http.post('/v1/formas-pagamentos', formaPagamento)
    },
    editar: (id) => {
        return http.get(`/v1/formas-pagamentos/${id}`)
    },
    atualizar: (formaPagamento) => {
        return http.put(`/v1/formas-pagamentos/${formaPagamento.id}`, formaPagamento)
    },
    excluir: (id) => {
        return http.delete(`/v1/formas-pagamentos/${id}`)
    }
}