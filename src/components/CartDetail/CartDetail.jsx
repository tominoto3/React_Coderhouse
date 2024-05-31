import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import CartContext from "../../context/CartContext";
import "./CartDetail.css";


export default function CartDetail({ cart }) {
    const { removeFromCart, onAdd } = useContext(CartContext);
    
    return (
        <div>
            {cart.map((prod) => (
                <>
                <CartItem key={prod.product.id} prod={prod} />
                

            <div className="add-cantidad">
                <button className="add-cantidad-button left" onClick={() => removeFromCart(prod.product.id, 1)} type="button">
                    -
                </button>

                <button className="add-cantidad-button right" onClick={() => onAdd(prod.product, 1)}
                    disabled={prod.cantidad === prod.product.stock}
                    type="button">
                    +
                </button>
            </div>
                </>
            ))
        }

        
        </div>

    )
}