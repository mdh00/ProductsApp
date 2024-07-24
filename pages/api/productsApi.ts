//api/productsApi.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/app/lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db();

    const products = await db.collection('products').find({}).toArray();

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};