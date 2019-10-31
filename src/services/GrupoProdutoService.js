import { http } from './config'

export default {
    listar: () => {
        return http.get('/v1/grupos-produtos')
    },
    salvar: (grupo) => {
        return http.post('/v1/grupos-produtos', grupo)
    },
    editar: (id) => {
        return http.get(`/v1/grupos-produtos/${id}`)
    },
    atualizar: (grupo) => {
        return http.put(`/v1/grupos-produtos/${grupo.id}`, grupo)
    },
    excluir: (id) => {
        return http.delete(`/v1/grupos-produtos/${id}`)
    }
}