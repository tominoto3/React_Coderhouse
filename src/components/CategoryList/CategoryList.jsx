import { NavLink } from 'react-router-dom';
import './CategoryList.css'

const mis_rutas =[{
    id: "1",
    path: "/category/remeras" ,
    label: "Remeras" ,
},
{
    id: "2",
    path:"/category/buzos" ,
    label: "Buzos" ,
},
{
    id: "3",
    path:"/category/pantalones" ,
    label:"Pantalones" ,
},
{
    id: "4",
    path:"/category/zapatillas" ,
    label:"Zapatillas" ,
},
{
    id: "5",
    path: "/category/accesorios",
    label:"Accesorios" ,
}]

function CategoryList (){
    return ( 
    
        <nav>
            <ul className="categorylist">
                {mis_rutas.map((ruta) => (
                    <li>
                        
                        <NavLink
                        className={({isActive}) => (isActive ? "active-link" : "")}  to={ruta.path}
                        >
                        {ruta.label}
                        </NavLink> 

                    </li>
                ))}
                
            </ul>
        </nav>
    );
}
export default CategoryList;