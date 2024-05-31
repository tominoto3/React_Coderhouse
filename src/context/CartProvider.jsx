import { useEffect, useState } from "react";
import CartContext from "./CartContext";


export default function CartProvider({ children }) {
    const [cart, setCart] = useState(
        localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    );

    

    const onAdd = (product, cantidad) => {
        const itemInCart = cart.find((item) => item.product.id === product.id);

        if (itemInCart) {
            const updatedCart = cart.map((item) => {
                if (item.product.id === product.id) {
                    return { product, cantidad: item.cantidad + cantidad };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { product, cantidad }]);
        }
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const totalInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
    }


    const totalPrice = cart
    .reduce((acc, item) => {
      return acc + item.product.price * item.cantidad;
    }, 0);


    const removeFromCart = (productId, quantity) => {
        const itemInCart = cart.find((item) => item.product.id === productId);
        if (itemInCart) {
            const updatedCart = cart.map((item) => {
                if (item.product.id === productId) {
                    return { product: item.product, cantidad: item.cantidad - quantity };
                }
                return item;
            });

            const filteredCart = updatedCart.filter((item) => item.cantidad > 0);

            setCart(filteredCart);
        }
    };

    

    const cleanCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{
            cart,
            onAdd,
            totalInCart,
            totalPrice,
            cleanCart,
            removeFromCart,
        }}>
            {children}
        </CartContext.Provider>
    );
} 