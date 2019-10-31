import { http } from './config'

export default {
    listar: () => {
        return http.get('/v1/secoes-produtos')
    },
    salvar: (secao) => {
        return http.post('/v1/secoes-produtos', secao)
    },
    editar: (id) => {
        return http.get(`/v1/secoes-produtos/${id}`)
    },
    atualizar: (secao) => {
        return http.put(`/v1/secoes-produtos/${secao.id}`, secao)
    },
    excluir: (id) => {
        return http.delete(`/v1/secoes-produtos/${id}`)
    }
}