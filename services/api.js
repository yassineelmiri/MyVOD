import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; 

export const login = async (email, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
};

export const fetchFilms = async () => {
  return axios.get(`${API_URL}/films`);
};
