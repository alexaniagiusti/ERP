import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://127.0.0.1:8080/api',
    // baseURL: 'https://erp-api-bruno.herokuapp.com/api',
});