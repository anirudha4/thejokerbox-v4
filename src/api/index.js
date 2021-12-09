import axios from 'axios';
// https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}
const BASE_URL = 'https://api.github.com/search'

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export { api };