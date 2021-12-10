import axios from 'axios';

const BASE_URL = 'https://us-central1-thejokerbox-v0.cloudfunctions.net/'

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export { api };