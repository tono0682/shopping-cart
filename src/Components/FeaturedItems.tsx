import ItemsGallery from "./ItemsGallery";

const mockFeaturedItems = [
    {
        "id": 12,
        "title": "Brown Perfume",
        "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
        "price": 40,
        "discountPercentage": 15.66,
        "rating": 4,
        "stock": 52,
        "brand": "Royal_Mirage",
        "category": "fragrances",
        "thumbnail": "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/12/1.jpg",
            "https://cdn.dummyjson.com/product-images/12/2.jpg",
            "https://cdn.dummyjson.com/product-images/12/3.png",
            "https://cdn.dummyjson.com/product-images/12/4.jpg",
            "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg"
        ]
    },
    {
        "id": 54,
        "title": "Pubg Printed Graphic T-Shirt",
        "description": "Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking",
        "price": 46,
        "discountPercentage": 16.44,
        "rating": 4.62,
        "stock": 136,
        "brand": "The Warehouse",
        "category": "mens-shirts",
        "thumbnail": "https://cdn.dummyjson.com/product-images/54/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/54/1.jpg",
            "https://cdn.dummyjson.com/product-images/54/2.jpg",
            "https://cdn.dummyjson.com/product-images/54/3.jpg",
            "https://cdn.dummyjson.com/product-images/54/4.jpg",
            "https://cdn.dummyjson.com/product-images/54/thumbnail.jpg"
        ]
    },
    {
        "id": 61,
        "title": "Leather Straps Wristwatch",
        "description": "Style:Sport ,Clasp:Buckles ,Water Resistance Depth:3Bar",
        "price": 120,
        "discountPercentage": 7.14,
        "rating": 4.63,
        "stock": 91,
        "brand": "Naviforce",
        "category": "mens-watches",
        "thumbnail": "https://cdn.dummyjson.com/product-images/61/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/61/1.jpg",
            "https://cdn.dummyjson.com/product-images/61/2.png",
            "https://cdn.dummyjson.com/product-images/61/3.jpg"
        ]
    },
    {
        "id": 8,
        "title": "Microsoft Surface Laptop 4",
        "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        "price": 1499,
        "discountPercentage": 10.23,
        "rating": 4.43,
        "stock": 68,
        "brand": "Microsoft Surface",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/8/1.jpg",
            "https://cdn.dummyjson.com/product-images/8/2.jpg",
            "https://cdn.dummyjson.com/product-images/8/3.jpg",
            "https://cdn.dummyjson.com/product-images/8/4.jpg",
            "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
        ]
    }
];


function FeaturedItems() {
    return (
        <div className="bg-background text-white w-full py-4 px-10 rounded-3xl">
            <h2 className="font-semibold">Featured Items</h2>
            <ItemsGallery category={""} items={mockFeaturedItems} />
        </div>
    );
}

export default FeaturedItems;
