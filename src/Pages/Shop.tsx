import { useLoaderData } from "react-router-dom";
import ItemsGallery from "../Components/ItemsGallery";
import { Products } from "../Interfaces/Product";
import { capitalCase } from "change-case";

export async function shopLoader(): Promise<{ products: Products; categories: string[] }> {
    const response = await fetch('https://dummyjson.com/products?limit=0');
    const products: Products = await response.json();

    const responseCat = await fetch('https://dummyjson.com/products/categories');
    const categories: string[] = await responseCat.json();

    return {products, categories }
}


function Shop() {
    const { products, categories } = useLoaderData() as {products:Products; categories:string[]};

    return (
        <div className="h-full">
            {categories
            .sort((a, b) => a.localeCompare(b))
            .map((category) =>(
                <div key={category}>
                    <h2 className="mb-4 text-primary font-semibold">{capitalCase(category)}</h2>
                    <ItemsGallery category={category} items={products.products} />
                </div>
            ))}                
        </div>
    );
}

export default Shop;
