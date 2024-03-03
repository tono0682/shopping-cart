import { useShop } from "../context/useShop"
import { Link } from "react-router-dom";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


function ShoppingCart() {
    const { cartItems, removeFromCart, getCartItemCount } = useShop();
    
    const cartCount = getCartItemCount();

    const shippingCost = 0;
    
    const costCart = cartItems.reduce((total, cartItem) => {
        return total + (cartItem.item.price * cartItem.quantity);
    }, 0);
    
    const costTotal = costCart + shippingCost;

    const handleRemoveFromCart = (id: number) => {
        removeFromCart(id); // Call addToCart when the form is submitted
    };

    if( cartCount < 1) {
        return(
            <div className="text-center">
                <h1 className="text-primary text-4xl font-bold m-5">YOUR CART IS EMPTY</h1>
                <p>Once you add something to your cart - it will appear here! Ready to start shopping?</p>
                <Link
                    to={"/"}
                    className="inline-block mt-5 bg-primary hover:bg-primaryLight text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                >
                    Start Shopping
                </Link>
            </div>
        )
    }

    return(
        <div className="w-full min-w-[300px] max-w-[1000px] flex self-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-24 w-full">
                <h1 className="col-span-1 md:col-span-2 text-4xl font-bold text-primary">My Cart</h1>
                <section className="flex flex-col gap-5">
                    {cartItems.map(cartItem=>(
                        <div 
                            key={cartItem.item.id}
                            className=" bg-white border-gray-200 border-4 flex items-center gap-5 min-w-[320px] max-w-[600px] p-2"
                        >
                            <img 
                                src={cartItem.item.thumbnail}
                                alt=""
                                className="max-h-[100px]"
                            />
                            <div className="grow flex flex-col justify-between gap-5 h-full">
                                <div>{cartItem.item.title}</div>
                                <div className="flex justify-between">
                                    <div>{formatter.format(cartItem.item.price)}</div>
                                    <div>QTY: {cartItem.quantity}</div>
                                </div>
                            </div>
                            <div 
                                className="px-2 cursor-pointer"
                                onClick={() => handleRemoveFromCart(cartItem.item.id)}
                            >
                                ❌
                            </div>
                        </div>
                    ))}
                </section>
                <section className="w-[300px] flex flex-col gap-2">
                    <h2 className="text-primary font-bold">Order Summary</h2>
                    <div className="flex justify-between">
                        <span>{cartCount} Items</span>
                        <span>{formatter.format(costCart)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Delivery</span>
                        <span>Free</span>
                    </div>
                    <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>{formatter.format(costTotal)}</span>
                    </div>
                    <div className="text-right">(Inclusive of GST)</div>
                </section>
            </div>
        </div>
    )
}

export default ShoppingCart