import axios from 'axios';

export const fetchProducts = async () => {
  const response = await axios.get('/lib/products');
  return response.data;
};