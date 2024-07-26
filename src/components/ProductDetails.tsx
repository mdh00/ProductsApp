interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex items-start p-4 space-x-6 max-w-4xl">
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-100 h-auto object-cover rounded-lg border border-gray-200"
          />
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-800">
            {product.price.toFixed(2)} LKR
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
