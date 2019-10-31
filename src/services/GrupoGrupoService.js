import { http } from './config'

export default {
    listar: () => {
        return http.get('/v1/grupos-produtos')
    },
    salvar: (secao) => {
        return http.post('/v1/grupos-produtos', secao)
    },
    editar: (id) => {
        return http.get(`/v1/grupos-produtos/${id}`)
    },
    atualizar: (secao) => {
        return http.put(`/v1/grupos-produtos/${secao.id}`, secao)
    },
    excluir: (id) => {
        return http.delete(`/v1/grupos-produtos/${id}`)
    }
}