import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const { name, description, price, imageUrl } = await request.json();

    if (!name || !description || !price || !imageUrl) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber)) {
      return NextResponse.json({ error: 'Invalid price' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('ProductDB');
    const collection = db.collection('product');

    const result = await collection.insertOne({
      name,
      description,
      price: priceNumber,
      imageUrl,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
