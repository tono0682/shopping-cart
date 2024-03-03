import React, { ReactNode, createContext } from "react";
import { useLocalStorage } from 'usehooks-ts'
import { Product } from "../Interfaces/Product";

interface ShopContextProps {
    cartItems: CartItem[]
    addToCart: (item: Product, qty: number) => void
    removeFromCart: (itemId:number) => void
    getCartItemCount: () => number, // Initialize with a function returning 0
  }

export interface CartItem {
    item: Product
    quantity: number
}

export const ShopContext = createContext< ShopContextProps | undefined >(undefined);

export const ShopProvider = (props: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cartItems', [])

    // Add to Cart
    const addToCart = (item:Product, qty:number) => {
        if (qty < 1) return
        
        const newCartItem: CartItem = {
            item,
            quantity:qty
        }

        setCartItems([...cartItems, newCartItem])
    }

    // Remove from Cart
    const removeFromCart = (itemId: number) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.item.id !== itemId))
    }

    const getCartItemCount = () => cartItems.reduce((total, item) => total + item.quantity, 0);


    const value: ShopContextProps = {
        cartItems,
        addToCart,
        removeFromCart,
        getCartItemCount,

      }

    return (        
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
