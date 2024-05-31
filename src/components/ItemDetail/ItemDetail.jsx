
import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import '../ListItem/Item.css'
import { useContext } from "react";
import CartContext from "../../context/CartContext";

export default function ItemDetail({ item }) {
    const { counter, incrementar, decrementar, reset } = useCount(0);
    const { onAdd } = useContext(CartContext);

    const handleAddToCart = () => {
        onAdd(item, counter);
        reset();
    }

    return (

        <div className="Item-container">

            <div className="Item-img-container">
                <img className="Item-Img" src={item.imageUrl} alt={item.title} />
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
                <button className="addcart-button" onClick={handleAddToCart} disabled={counter <= 0}><p>Agregar al carrito</p></button>
            </div>
            <div className="card-footer">
                <small className="text-body-secondary">QUEDAN <strong>{item.stock - counter} </strong> UNIDADES DISPONIBLES!</small>
            </div>
            {/* <p><em>¡QUEDAN <strong>{item.stock - counter} </strong> UNIDADES DISPONIBLES!</em></p> */}
        </div>
    )

}