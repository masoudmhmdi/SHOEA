import axios from 'axios';
import { getProduct } from '../instance/GetProduct';

export const globalSearch = async (input) => {
  let res = await axios.get(`http://localhost:3000/product?q=${input}`);
  return res.data;
};
