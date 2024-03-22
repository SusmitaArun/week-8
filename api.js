// src/api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3200/api';

export const registerUser = (userData) => axios.post(`${API_BASE_URL}/auth/register`, userData);
export const loginUser = (userData) => axios.post(`${API_BASE_URL}/auth/login`, userData);
// Add more API requests as needed
