import { ObjectId } from 'mongodb';
import ProductDetails from '@/components/ProductDetails';
import clientPromise from '@/app/lib/mongodb';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    const client = await clientPromise;
    const db = client.db('ProductDB');
    const collection = db.collection('product');
    const product = await collection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return <p>Product not found</p>;
    }

    const productData = {
      _id: product._id.toString(),
      name: product.name,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl
    };
    
    return <ProductDetails product={productData} />;
  } catch (error) {
    console.error('Error fetching product:', error);
    return <p>Failed to load product</p>;
  }
};

export default ProductPage;
