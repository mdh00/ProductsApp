import axios from 'axios';

interface Review {
  reviewId: string;
  name: string;
  email: string;
  comment: string;
  images: string[];
  rating: number;
}

export const fetchReviews = async () => {
  try {
    const response = await axios.get<Review[]>('http://localhost:8080/review');
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw new Error('Error fetching reviews');
  }
};
