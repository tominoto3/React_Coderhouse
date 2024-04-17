
import CartWidget from "./CartWidget";
import CategoryList from "./CategoryList";
import '../App.css'



const Navbar =()=>{
    return (
        <div className="navbar_wrapper">
            <CartWidget />
            <CategoryList/>
        </div>
        
    )
}

export default Navbar;
