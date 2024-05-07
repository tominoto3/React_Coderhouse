
import '../ListItem/Item.css'
import ItemDetail from "./ItemDetail";

export default function ItemDetailList ({ product }){

    

    return (

        <div className="Item-list-container">
            <ItemDetail item={product}/>
        </div>
    )
}
