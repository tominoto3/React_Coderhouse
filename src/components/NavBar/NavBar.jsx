
import { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import './NavBar.css'

import CartContext from "../../context/CartContext";

const Navbar =()=>{
    const { cart } = useContext(CartContext);
    return (
        <div className="navbar_wrapper">
            <CategoryList/>
            <div className={`${cart.length === 0 ? "oculto" : ""}`}>
                <CartWidget />
            </div>
        </div>
    )
}

export default Navbar;
