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
      <div className="ml-56 mr-56">
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover mb-4 rounded"
          />
        )}
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl mt-2">{product.description}</p>
        <p className="text-xl font-bold mt-2">{product.price.toFixed(2)} LKR</p>
      </div>
    );
  };
  
  export default ProductDetails;
  