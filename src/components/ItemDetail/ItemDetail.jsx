import { Link, NavLink } from "react-router-dom";
import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import '../ListItem/Item.css'

export default function ItemDetail({ item }) {
    const {counter, incrementar, decrementar} = useCount(0);
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
            <p className="Item-description">{item.description}</p>
            <p className="Item-price">${item.price}</p>
            
            <div className="Item-count-container">
                <ItemCount
                    stock={item.stock}
                    counter={counter}
                    incrementar={incrementar}
                    decrementar={decrementar}
                />
            
            </div>
            <div className="Item-addCart-Cointainer">
                <button className="addcart-button" onClick= {() => onAdd(item, counter)} disabled={counter<=0}><p>Agregar al carrito</p></button>
            </div>

        </div>
    )




}