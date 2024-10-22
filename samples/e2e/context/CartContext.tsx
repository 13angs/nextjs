"use client"
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    totalPrice: number;
    checkout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const checkout = () => {
        alert(`Thank you for your purchase! Total: $${totalPrice}`);
        setCart([]); // Reset cart after checkout
    };

    useEffect(() => {
        const total = cart.reduce((acc, current) => acc + current.price, 0)
        setTotalPrice(total)
    }, [cart])

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                totalPrice: cart.reduce((acc, item) => acc + item.price, 0),
                checkout,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};