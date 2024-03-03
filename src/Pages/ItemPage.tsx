import React, { useState } from "react";
import { Product } from "../Interfaces/Product";
import { useLoaderData } from "react-router-dom";
import { useShop } from "../context/useShop";

export async function productLoader(item:string | undefined): Promise<{ product: Product }> {
    const response = await fetch(`https://dummyjson.com/products/${item}`);
    const product: Product = await response.json();

    return {product }
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


function ItemPage() {
    const { product } = useLoaderData() as {product:Product};
    const [imageIdx, setImageIdx] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useShop();

    const handleAddToCart = (e :React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addToCart(product, quantity);
    };

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-1 py-8 rounded-lg h-full min-w-[300px]">
            <section className="flex flex-col items-center gap-5">
                <div className="flex items-center h-[300px]" >
                    <img src={product.images[imageIdx]} alt="" className="max-w-[300px] max-h-[300px] " />
                </div>
                <div className="flex w-full gap-2 justify-center flex-wrap">
                    {
                        product.images.map((image, idx)=>(
                            <img 
                                src={image} 
                                alt="" 
                                key={idx}
                                className="max-w-[60px] max-h-[60px] border-2 border-gray-100 transition duration-300 ease-in-out hover:scale-105" 
                                onClick ={()=>{setImageIdx(idx)}}
                            />
                        ))
                    }
                </div>
            </section>
            <section>
                <div className="mb-2">
                    <h1 className="text-xl text-primary font-bold">{product.title}</h1>
                    <p>{product.brand}</p>
                </div>
                <div className="font-bold">{formatter.format(product.price)}</div>
                <div className="mt-3 mb-3">
                    <p className="font-bold">Description</p>
                    <p>{product.description}</p>
                </div>
                <form onSubmit={handleAddToCart} className="flex flex-col">
                    <label htmlFor="" className="font-bold">Quantity</label>
                    <input 
                        type="number"
                        value={quantity}
                        min={0}
                        max={10}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        className="border border-primary rounded-lg text-center max-w-[50px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button className="mt-5 max-w-[300px] bg-primary hover:bg-primaryLight text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Add to Cart</button>
                </form>

            </section>  
        </div>
    )
}

export default ItemPage