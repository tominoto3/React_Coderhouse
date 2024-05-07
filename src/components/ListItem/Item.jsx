import { Link, NavLink } from "react-router-dom";

import './Item.css'

export default function Item({ item }) {
    
    const onAdd = (nombreDeItem, cantidadLlevar) => {
        console.log("NombreDelItem: ", nombreDeItem);
        console.log("CantidadaLlevar:",cantidadLlevar);
    }


    return(
        <div className="Item-container">

            <div className="Item-img-container">
                <img  className="Item-Img" src={item.image} alt={item.title} />
            </div>

            <h2 className="Item-Title">{item.title}</h2>
            <p className="Item-price">${item.price}</p>

            <div className="Detalles-container">
                <button className="Detalles-button"><NavLink to={`/item/${item.id}`}> Ver detalles</NavLink></button>
            </div>

        </div>
    )

}