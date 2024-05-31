import Brand from "../Brand/Brand";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Navbar from "../NavBar/NavBar";
import './Layout.css'

function Layout({ children }){

    return (
        <div className="layout-container">
            <div className='Headerjsx'>
                <Brand/>
                <Navbar/>
            </div>
            <div className="main">
            <main className="main-container"> {children}</main>
            </div>
            {/* <Footer/> */}
        </div>
    )

}
export default Layout;