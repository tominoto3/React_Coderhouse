import React, { useContext } from "react";

import CartContext from "../../context/CartContext";
import './CartContainer.css';
import { Link } from "react-router-dom";


import CartDetail from "../CartDetail/CartDetail";

const CartContainer = () => {

    const { cart, totalPrice, cleanCart } = useContext(CartContext);

    const handleVaciar = () => {
        cleanCart();
    }

    return (

        <div className="cart-container">
            <h1> Mi Carrito</h1>
            {cart.length > 0 ? (
                <div >
                <CartDetail cart={cart} />

                <div className="Cart-items-container">
                    <div className="total-price">
                        <h2> Precio Total: ${totalPrice} </h2>
                        <div className="link-container">
                        
                            <Link className="link-terminarcompra" to="/checkout">
                            <h3>Terminar compra</h3>
                        </Link>
                        
                        </div>
                        <div className="cart-Button-container">
                            <button className="Clear-cart-Button" onClick={handleVaciar}>Vaciar Carrito</button>
                        </div>
                
                    </div>
                </div>
            </div>
            ) :
                <div>
                    <h3> El carrito esta vacio. </h3>
                    <button> <Link to={`/`}> Volver al incio</Link> </button>
                </div>
            }


        </div>
    )
}

export default CartContainer