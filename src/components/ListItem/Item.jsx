import { Link } from "react-router-dom";
import './Item.css'

export default function Item({ item }) {
    
    return(
        
        <div className="Item-container">
        <Link to={`/item/${item.id}`}>

            <div className="Item-img-container">
                <img  className="Item-Img" src={item.imageUrl} alt={item.title} />
            </div>

            <h5 className="card-title">{item.title}</h5>
            <p className="Item-price">${item.price}</p>

            </Link>
        </div>
    )
}
