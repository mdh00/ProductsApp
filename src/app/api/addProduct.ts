import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/app/lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('ProductDB');
      const collection = db.collection('product');

      const { name, description, price, imageUrl } = req.body;

      if (!name || !description || !price || !imageUrl) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Convert price to a number
      const priceNumber = parseFloat(price);

      if (isNaN(priceNumber)) {
        return res.status(400).json({ error: 'Invalid price' });
      }

      const result = await collection.insertOne({
        name,
        description,
        price: priceNumber,
        imageUrl,
      });

      res.status(200).json(result);
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
