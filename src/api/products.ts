import axios from 'axios';

interface Product {
  productId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string
}

export const fetchProducts = async () => {
  try {
    const response = await axios.get<Product[]>('http://localhost:8080/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Error fetching products');
  }
};
