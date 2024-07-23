import { useEffect } from 'react';

export const useClient = () => {
  useEffect(() => {
    // Add client-side logic here
    console.log('This code runs on the client side');
  }, []);
};
