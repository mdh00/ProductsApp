import React, { useState, useEffect } from 'react';
import { ProductImageWrapper } from './ProductImageWrapper';

interface Product {
    id: string;
    productId: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
}



interface ProductProps {
    product: Product;
    action: 'Add to Cart' | 'Add to Gift Box';
    handleClick: (product: Product) => void;
    isVisible: boolean;
}

const ProductItem: React.FC<ProductProps> = ({ product, action, handleClick }) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(0);

    useEffect(() => {
        const storedQuantity = localStorage.getItem(product.id + '_quantity');
        if (storedQuantity) {
            setQuantity(parseInt(storedQuantity));
        }
        const storedSelected = localStorage.getItem(product.id + '_isSelected');
        if (storedSelected) {
            setIsSelected(storedSelected === 'true');
        }
    }, [product]);

    const handleButtonClick = () => {
        const updatedQuantity = quantity + 1; // Increment quantity
        setIsSelected(true); // Mark as selected
        setQuantity(updatedQuantity); // Update state immediately
        localStorage.setItem(product.id + '_isSelected', 'true');
        localStorage.setItem(product.id + '_quantity', String(updatedQuantity)); // Store updated quantity
        handleClick(product);
    };

    const handleRemoveButtonClick = () => {
        const updatedQuantity = Math.max(0, quantity - 1); // Decrement quantity, but not below 0
        setQuantity(updatedQuantity); // Update state immediately
        localStorage.setItem(product.id + '_quantity', String(updatedQuantity)); // Store updated quantity
    };



    return (
        <li key={product.id} className="p-4 flex-shrink-0 w-1/3">
            <div className={`relative flex flex-col ${isSelected ? 'border border-fuchsia-800 rounded-lg p-2' : ''} h-full w-full`}>
                <ProductImageWrapper
                    src={product.imageUrl}
                    alt={product.name}
                    width={350}
                    height={250}
                />
                <h3>{product.name}</h3>
                <h3>Rs.{product.price}</h3>
                <div className="flex-grow"></div>
                <div className="flex items-center justify-between flex-grow">
                <button
                    type="button"
                    className="bg-fuchsia-800 text-white px-9 py-2 rounded-md mt-2 hover:bg-fuchsia-900"
                    onClick={handleButtonClick}
                >
                    {action}
                </button>
                <button
                        type="button"
                        className="bg-red-700 text-white px-4 py-2 rounded-md mt-2 hover:bg-red-800"
                        onClick={handleRemoveButtonClick}
                    >
                        -
                    </button></div>
                {isSelected && (
                    <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center">
                        {quantity}
                    </div>
                )}
            </div>
        </li>

    );
};

export default ProductItem;
