import axios from 'axios';

// const BASE_URL = 'https://us-central1-thejokerbox-v0.cloudfunctions.net/'
const BASE_URL = 'https://thejokerbox-v4.herokuapp.com/api/'
// const BASE_URL = 'http://localhost:8000/api/'

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export { api };