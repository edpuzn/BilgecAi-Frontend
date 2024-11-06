// src/api.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api', // Backend'in adresi
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    search(query) {
        return apiClient.post('/search', { query });
    },
};
