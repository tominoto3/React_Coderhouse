import "../ListItem/Item.css"
import ItemList from "../ListItem/ItemList";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";

function ItemListContainer (){
    const { CategoryId } = useParams();
    const {isLoading : productsLoading, products} = useProducts( CategoryId );

    if(productsLoading) return <h1>Cargando...</h1>;
    return (
        <div className="Items-container">
            
            <ItemList products={products}/>

        </div>
    )
}
export default ItemListContainer;
