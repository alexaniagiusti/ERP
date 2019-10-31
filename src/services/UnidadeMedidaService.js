import { http } from './config'

export default {
    listar: () => {
        return http.get('/v1/unidades')
    },
    salvar: (unidade) => {
        return http.post('/v1/unidades', unidade)
    },
    editar: (id) => {
        return http.get(`/v1/unidades/${id}`)
    },
    atualizar: (unidade) => {
        return http.put(`/v1/unidades/${unidade.id}`, unidade)
    },
    excluir: (id) => {
        return http.delete(`/v1/unidades/${id}`)
    }
}