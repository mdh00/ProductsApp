"use client";
import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import SearchBar from "../../../components/InventoryManagement/searchbar";

interface Size {
    id: string;
    name: string;
}

interface Category {
    id: string;
    name: string;
}

interface Product {
    id: string;
    productId: string;
    category: Category;
    name: string;
    size: Size;
    imageUrl: string;
    description: string;
    giftBoxProduct: boolean;
    price: number;
    quantity: number;
}

const Products: FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [newQuantity, setNewQuantity] = useState<number>(0);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/products')
          .then(response => {
            setProducts(response.data);
            setFilteredProducts(response.data);
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
      }, []);
    
    const handleDelete = async (id: string) => {
        if (selectedProduct?.id === id) { 
            try {
                await axios.delete(`http://localhost:8080/products/${id}`);
                const updatedProducts = products.filter(product => product.id !== id);
                const updatedFilteredProducts = filteredProducts.filter(product => product.id !== id);
                setProducts(updatedProducts); 
                setFilteredProducts(updatedFilteredProducts);
                setSelectedProduct(null);
                window.alert('Product successfully deleted!');
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        } else {
            window.alert('Please select a product before deleting');
        }
    };

    const handleCheckboxChange = (product: Product) => {
        if (selectedProduct?.id === product.id) {
            setSelectedProduct(null);
            setNewQuantity(0);
        } else {
            setSelectedProduct(product);
            setNewQuantity(product.quantity);
        }
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, product: Product) => {
        if (selectedProduct?.id === product.id) {
            setNewQuantity(Number(event.target.value));
        }
    };

    const handleSearch = (query: string) => {
        if (query) {
            const lowerCaseQuery = query.toLowerCase();
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(lowerCaseQuery) ||
                product.productId.toLowerCase().includes(lowerCaseQuery) ||
                product.category.name.toLowerCase().includes(lowerCaseQuery) ||
                product.size.name.toLowerCase().includes(lowerCaseQuery)
            );
            if (filtered.length === 0) {
                alert('No products found matching your search');
            }
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    };

    const handlePrint = () => {
        axios({
            url: 'http://localhost:8080/reports/all-inventory',
            method: 'GET',
            responseType: 'blob', 
        })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Inventory_report.pdf');
            document.body.appendChild(link);
            link.click();
        })
        .catch((error) => {
            console.error('Error downloading the report:', error);
        });
    };
  
    const handleEditClick = () => {
        if (selectedProduct) {
            axios.put(`http://localhost:8080/products/${selectedProduct.id}`, selectedProduct)
            .then(response => {
                const updatedProducts = filteredProducts.map(product => product.id === response.data.id ? response.data : product);
                const updatedFilteredProducts = filteredProducts.map(product => product.id === response.data.id ? response.data : product);
                setProducts(updatedProducts);
                setFilteredProducts(updatedFilteredProducts);
                setSelectedProduct(null);
                window.alert('Product successfully edited!');
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        }
    };

    const handleAttributeChange = (event: React.ChangeEvent<HTMLInputElement>, product: Product, attribute: string) => {
        if (selectedProduct?.id === product.id) {
            let newValue;
    
            // Check the type of the input field
            switch (event.target.type) {
                case 'checkbox':
                    newValue = event.target.checked;
                    break;
                case 'number':
                    newValue = Number(event.target.value);
                    break;
                default:
                    newValue = event.target.value;
            }
    
            setSelectedProduct({
                ...selectedProduct,
                [attribute]: newValue
            });
        }
    };

    return (
        <div className="ml-[320px]">

            <div className="mt-[30px] mt-[90px]">   

                <div className="self-stretch  flex flex-col items-start justify-start pt-[5rem] ">
                    <div className="w-[80rem] !m-[0] absolute top-[4.8rem] left-[calc(50%_-_490px)] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1050:flex-wrap">
                        
                        <SearchBar title="Search " onSearch={handleSearch} />

                        <div className="flex flex-row items-start justify-start gap-[2.125rem] max-w-full mq750:flex-wrap">
                        <button
                            className="cursor-pointer hover:bg-darkmagenta py-[0.687rem] px-[3.062rem] bg-shadeofpurple rounded-6xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-shadeofpurple rounded-[50px]"
                        >
                            <Link href="/InventoryManagement/Products/AddProduct">
                                <b className="relative text-[1rem] text-black hover:text-white text-left " >
                                    + Add Product
                                </b>
                            </Link>

                        </button>
                        <button className="cursor-pointer hover:bg-darkmagenta py-[0.687rem] px-[3.062rem] bg-shadeofpurple rounded-6xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] border-[1px] border-solid border-shadeofpurple rounded-[50px] overflow-hidden flex flex-row items-center justify-center">
                            <b className="relative text-[1rem] inline-block text-black hover:text-white text-left mq450:text-[1rem]" onClick={handlePrint}>
                                Print
                            </b>
                        </button>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* Product details section */}
            <div className="relative w-full flex flex-row items-start justify-center p-2.5 text-left text-smi text-darkslategray">
            
                {/* Checkbox column */}
                <div className="w-[65px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]"> 
                    <div className="self-stretch rounded-tl-3xs rounded-tr-none rounded-b-none bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5">
                        <div className="w-[18px] relative rounded bg-thistle h-[18px] border-[1px] border-solid border-black">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs border-[2px] border-solid border-checkbox-empty" />
                        </div>
                    </div>
                    {filteredProducts.map((product, index) => (
                    <div key={index} className="self-stretch rounded-t-none rounded-br-none  bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5">
                        <input type="checkbox" id={`product-${product.id}`} value={product.id} onChange={() => handleCheckboxChange(product)} className="w-[18px] relative rounded h-[18px] border-[1px] border-solid border-black" />
                    </div>
                    ))}
                </div>

                {/* Product ID column */}
                <div className="w-[100px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                        <b className="relative tracking-[0.01em]">Product ID</b>
                    </div>
                    {filteredProducts.map((product, index) => (
                    <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                        <input type="text" value={selectedProduct?.id === product.id ? selectedProduct.productId : product.productId} disabled={selectedProduct?.id !== product.id} onChange={(e) => handleAttributeChange(e, product, 'productId')} className="relative tracking-[0.01em]" style={{backgroundColor: 'transparent', width: '100%'}} />
                    </div>
                    ))}
                </div>

                {/* Product column */}
                <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                        <b className="relative tracking-[0.01em]">Product</b>
                    </div>
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start p-2.5 gap-[10px]">
                            <img className="w-6 relative h-6 object-cover" alt="" src={product.imageUrl} />
                            <input type="text" value={selectedProduct?.id === product.id ? selectedProduct.name : product.name} disabled={selectedProduct?.id !== product.id} onChange={(e) => handleAttributeChange(e, product, 'name')} className="relative tracking-[0.01em]" style={{backgroundColor: 'transparent', width: '100%'}} />
                        </div>
                    ))}
                </div>

                {/* Category column */}
                <div className="w-[135px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Category</b>
                    </div>
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                            <div className="relative tracking-[0.01em]">{product.category.name}</div>
                        </div>
                    ))}
                </div>

                 {/* GiftBoxProduct column */}
                 <div className="w-[135px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 text-sm text-white">
                        <b className="relative tracking-[0.01em]">GiftBox Product</b>
                    </div>
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5">
                           <input type="checkbox" checked={selectedProduct?.id === product.id ? selectedProduct.giftBoxProduct : product.giftBoxProduct} disabled={selectedProduct?.id !== product.id} onChange={(e) => handleAttributeChange(e, product, 'giftBoxProduct')} className="relative tracking-[0.01em]" style={{backgroundColor: 'transparent', width: '100%'}} />
                        </div>
                    ))}
                </div>

                {/* Size column */}
                <div className="w-[100px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Size</b>
                    </div>
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                            <div className="relative tracking-[0.01em]">{product.size.name}</div>
                        </div>
                    ))}
                </div>

                {/* Price column */}
                <div className="w-[100px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Price</b>
                    </div>
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                            <input type="number" value={selectedProduct?.id === product.id ? selectedProduct.price : product.price} disabled={selectedProduct?.id !== product.id} onChange={(e) => handleAttributeChange(e, product, 'price')} className="relative tracking-[0.01em]" style={{backgroundColor: 'transparent', width: '100%'}} />
                        </div>
                    ))}
                </div>

                {/* Quantity column */}
                <div className="w-[100px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px]">
                    <div className="self-stretch bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5  text-sm text-white">
                        <b className="relative tracking-[0.01em]">Quantity</b>
                    </div>
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-start p-2.5 ">
                            <div className="relative tracking-[0.01em]">{product.quantity}</div>
                        </div>
                    ))}
                </div>

                {/* Action column */}
                <div className="w-[100px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-[8px] text-sm text-white">
                    <div className="self-stretch rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-11 flex flex-row items-center justify-center p-2.5 ">
                        <b className="relative tracking-[0.01em]">Action</b>
                    </div>
                    {filteredProducts.map((product, index) => (
                    <div className="self-stretch bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center p-2.5 gap-[10px]">
                        <button onClick={handleEditClick}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="Edit" src="https://i.ibb.co/bJf0SfB/edit.png"/></button>
                        <button onClick={() => handleDelete(product.id)}><img className="w-6 relative h-6 overflow-hidden shrink-0" alt="Delete" src="https://i.ibb.co/cNX07t0/delete.png"/></button>
                    </div>
                    ))}
                </div> 

            </div> 

        </div>
    );
    
};

export default Products;
