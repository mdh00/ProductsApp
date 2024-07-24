//api/productsApi.ts
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/app/lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db('ProductDB');

    const products = await db.collection('product').find({}).toArray();

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};