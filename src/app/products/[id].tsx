import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ObjectId } from 'mongodb';
import clientPromise from '@/app/lib/mongodb';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductPageProps {
  product: Product | null;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const router = useRouter();

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="p-4">
      <button onClick={() => router.back()} className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">
        Back
      </button>
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover mb-4 rounded"
        />
      )}
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl mt-2">{product.description}</p>
      <p className="text-xl font-bold mt-2">{product.price.toFixed(2)} LKR</p>
    </div>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const client = await clientPromise;
    const db = client.db('ProductDB');
    const collection = db.collection('product');
    const { id } = context.params!;
    const product = await collection.findOne({ _id: new ObjectId(id as string) });

    if (!product) {
      return { notFound: true };
    }

    // Convert _id to string for serialization
    const productData = { ...product, _id: product._id.toString() };

    return { props: { product: productData } };
  } catch (error) {
    console.error('Error fetching product:', error);
    return { props: { product: null } };
  }
};
