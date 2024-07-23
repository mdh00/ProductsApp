"use client";

import React, { useState } from 'react';

interface Size {
    id: string;
    name: string;
}

interface Category {
    id: string;
    name: string;
}
interface Product {
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

const AddProduct = () => {
    const [product, setProduct] = useState<Product>({
        productId: '',
        category: { id: '66184676a1911b830d7893c0', name: 'Astro' }, // Set default value
        name: '',
        size: { id: '6618459ea1911b830d78279e', name: 'Non' }, // Set default value
        imageUrl: '',
        description: '',
        giftBoxProduct: true, // Set default value
        price: 0.0, // Set default value 
        quantity: 0, // Set default value
    });

    // Mapping of category names to IDs
    const categoryMap: { [key: string]: string } = {
        "Astro": "66184676a1911b830d7893c0",
        "BTS": "66184676a1911b830d7893c1",
        "TXT": "66184676a1911b830d7893c2",
        "NCT": "66184676a1911b830d7893c3",
        "EXO": "66184676a1911b830d7893c4",
        "Blackpink": "66184676a1911b830d7893c5",
        "Stray Kids": "66184676a1911b830d7893c6",
        "GOT7": "66184676a1911b830d7893c7",
        "TWICE": "66184676a1911b830d7893c8",
        "Treasure": "66184676a1911b830d7893c9",
        "Shinee": "66184676a1911b830d7893ca",
        "Monsta X": "66184676a1911b830d7893cb",
        "Red Velvet": "66184676a1911b830d7893cc",
        "New Jeans": "66184676a1911b830d7893cd",
        "Seventeen": "66184676a1911b830d7893ce",
    };

    // Mapping of size names to IDs
    const sizeMap: { [key: string]: string } = {
        "Extra Small": "6618459ea1911b830d782799",
        "Small": "6618459ea1911b830d78279a",
        "Medium": "6618459ea1911b830d78279b",
        "Large": "6618459ea1911b830d78279c",
        "Extra Large": "6618459ea1911b830d78279d",
        "Non": "6618459ea1911b830d78279e",
    };

    // Handle change in form fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'category') {
        const categoryId = categoryMap[value];
        setProduct({ ...product, [name]: { id: categoryId, name: value } });
    } else if (name === 'size') {
        const sizeId = sizeMap[value];
        setProduct({ ...product, [name]: { id: sizeId, name: value } });
    } else if (name === 'price') {
        setProduct({ ...product, [name]: parseFloat(value) });
    } else if (name === 'quantity') {
        setProduct({ ...product, [name]: parseInt(value, 10) });
    } else if (name === 'giftBoxProduct') {
        setProduct({ ...product, [name]: value === "true" });
    } else {
        setProduct({ ...product, [name]: value });
    }
    };

    const handleSubmit = async () => {
        if (!product.name || !product.price || !product.quantity || !product.category || !product.imageUrl || !product.description ) {
            alert('Please fill in all required fields');
            return;
        }
        try {
            const response = await fetch('http://localhost:8080/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            if (response.ok) {
                alert('Product successfully created!');
                
                setProduct({
                    productId: '',
                    category: { id: '66184676a1911b830d7893c0', name: 'Astro' },
                    name: '',
                    size: { id: '6618459ea1911b830d78279e', name: 'Non' },
                    imageUrl: '',
                    description: '',
                    giftBoxProduct: true,
                    price: 0.0,
                    quantity: 0,
                });
            } else {
                const errorData = await response.json();
                alert('Error creating product.');
            }
        } catch (error) {
            // If an error occurs, log it and display a generic error message
            console.error('Error:', error);
            alert('An error occurred while creating the product.');
        }
    };

    // Function to clear form fields
    const clearForm = () => {
        setProduct({
            productId: '',
            category: { id: '66184676a1911b830d7893c0', name: 'Astro' },
            name: '',
            size: { id: '6618459ea1911b830d78279e', name: 'Non' },
            imageUrl: '',
            description: '',
            giftBoxProduct: true,
            price: 0.0,
            quantity: 0,
        });
    };

    // Function to handle cancel button click
    const handleCancel = () => {
        clearForm(); // Clear form fields
    };

  	return (
        // Form layout
        <div className="w-full relative [backdrop-filter:blur(2.5px)] h-[890px] overflow-hidden shrink-0 flex flex-col items-center justify-center text-left text-xl text-black">
            <div className="flex flex-col items-center ml-[340px] mt-[90px] bg-shadeofpurple rounded-[20px] justify-center">
                <form >{/* Form fields */}
                    <div className="w-[863px] h-[650px]  flex flex-row items-center justify-center ">
                        <div className="w-[863px] relative bg-transparent h-[640px]" >
                            {/* Product Id */}
                            <div className="absolute top-[2px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[102px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Product Id</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <input className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                        type="text" name='productId' value={product.productId} onChange={handleChange} placeholder="P001"style={{backgroundColor: 'transparent'}}/>
                                </div>
                            </div>
                            {/* Category */}
                            <div className="absolute top-[75px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[92px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Category</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <select className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                        name="category" value={product.category.name} onChange={handleChange} style={{backgroundColor: 'transparent'}}>
                                        <option value="Astro">Astro</option>
                                        <option value="BTS">BTS</option>
                                        <option value="TXT">TXT</option>
                                        <option value="NCT">NCT</option>
                                        <option value="EXO">EXO</option>
                                        <option value="Blackpink">Blackpink</option>
                                        <option value="Stray Kids">Straykids</option>
                                        <option value="GOT7">GOT7</option>
                                        <option value="TWICE">TWICE</option>
                                        <option value="Treasure">Tresure</option>
                                        <option value="Shinee">Shinee</option>
                                        <option value="Monsta X">Mosta X</option>
                                        <option value="Red Velvet">Red velvet</option>
                                        <option value="New Jeans">New Jeans</option>
                                        <option value="Seventeen">Seventeen</option>
                                    </select>
                                </div>
                            </div>
                            {/* Name */}
                            <div className="absolute top-[148px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[57px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Name</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <input className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                        type="text" name='name' value={product.name} onChange={handleChange} placeholder="Bag" style={{backgroundColor: 'transparent'}}
                                    />
                                </div>
                            </div>
                            {/* Size */}
                            <div className="absolute top-[221px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[42px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Size</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <select className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                        name="size" value={product.size.name} onChange={handleChange} style={{backgroundColor: 'transparent'}}>
                                        <option value="Extra Small">Extra Small</option>
                                        <option value="Small">Small</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Large">Large</option>
                                        <option value="Extra Large">Extra Large</option>
                                        <option value="Non">Non</option>
                                    </select>
                                </div>
                            </div>
                            {/* Image URL */}
                            <div className="absolute top-[294px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[94px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Image Url</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <input className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                        type="text" name='imageUrl' value={product.imageUrl} onChange={handleChange} placeholder="https://i.ibb.co/s10903s/celine-white.png" style={{backgroundColor: 'transparent'}}
                                    />
                                </div>
                            </div>
                            {/* Description */}
                            <div className="absolute top-[367px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[114px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Description</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <textarea className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                        name='description' value={product.description} onChange={handleChange}  placeholder="example description" style={{backgroundColor: 'transparent'}}
                                    />
                                </div>
                            </div>
                            {/* GiftBox Product */}
                            <div className="absolute top-[440px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[157px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">GiftBox Product</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <select className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                        name='giftBoxProduct' value={product.giftBoxProduct.toString()} onChange={handleChange} style={{backgroundColor: 'transparent'}}>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </select>
                                </div>
                            </div>
                            {/* Price */}
                            <div className="absolute top-[513px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[51px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Price</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <input className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                        type="number" step="0.01" min="1" name='price' value={product.price} onChange={handleChange} placeholder="2990.85" style={{backgroundColor: 'transparent'}}
                                    />
                                </div>
                            </div>
                            {/* Quantity */}
                            <div className="absolute top-[586px] left-[12px] flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start relative">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[299px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <div className="w-[85px] absolute !m-[0] top-[20px] left-[31px] tracking-[0.01em] font-semibold inline-block z-[1]">Quantity</div>
                                </div>
                                <div className="flex flex-col items-start justify-start relative text-gray">
                                    <div className="flex flex-col items-start justify-start p-2.5 z-[0]">
                                        <div className="w-[500px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-thistle shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-12" />
                                    </div>
                                    <input className="w-[466px] h-[28px] absolute !m-[0] top-[20px] left-[28px] tracking-[0.01em] font-medium inline-block z-[1]"
                                        type="number" min="1" name='quantity' value={product.quantity} onChange={handleChange} placeholder="26" style={{backgroundColor: 'transparent'}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {/* Save and cancel buttons */}
                <div className="w-[863px] h-[68px] flex flex-row items-center justify-center text-white">
                    <div className="[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-col items-start justify-start p-2.5" >
                        <button className="rounded-[50px] bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-3 px-4 border-[1px] border-solid border-darkmagenta" onClick={handleCancel}>
                            <div className="relative font-semibold">Clear</div>
                        </button>
                    </div>
                    <div className="[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-col items-start justify-start p-2.5 ml-[-10px]">
                        <button className="rounded-[50px] bg-darkmagenta shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-3 px-4 border-[1px] border-solid border-darkmagenta" onClick={handleSubmit}>
                            <div className="relative font-semibold">Save</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>     
    );
};

export default AddProduct;
