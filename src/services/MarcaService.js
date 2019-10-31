import { http } from './config'

export default {
    listar: () => {
        return http.get('/v1/marcas')
    },
    salvar: (marca) => {
        return http.post('/v1/marcas', marca)
    },
    editar: (id) => {
        return http.get(`/v1/marcas/${id}`)
    },
    atualizar: (marca) => {
        return http.put(`/v1/marcas/${marca.id}`, marca)
    },
    excluir: (id) => {
        return http.delete(`/v1/marcas/${id}`)
    }
}