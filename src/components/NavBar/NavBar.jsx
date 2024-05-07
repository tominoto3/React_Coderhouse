
import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import './NavBar.css'

const Navbar =()=>{
    return (
        <div className="navbar_wrapper">
            <CategoryList/>
            <CartWidget />
        </div>
    )
}

export default Navbar;
