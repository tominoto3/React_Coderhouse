import { useContext } from "react";
import CartIcon from "../CartIcon/CartIcon";
import './CartWidget.css'
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom";

function CartWidget (){
    const { totalInCart } = useContext( CartContext );
    

    return (
        
        <div className="cart_container">
            <Link to="/cart"> <CartIcon height={30} width={30}/></Link>
            <span>{totalInCart()}</span>
        </div>
    )
}

export default CartWidget;
