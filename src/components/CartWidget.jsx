import CartIcon from "./CartIcon";
import '../App.css'

function CartWidget (){
    return (
        <div className="cart_container">
            <CartIcon height={30} width={30}/>
            <span>5</span>
        </div>
    )
}

export default CartWidget;
