import axios from 'axios';

export const getProduct = axios.create({
  baseURL: 'http://localhost:3000/product',
});
