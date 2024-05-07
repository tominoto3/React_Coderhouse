
import useProduct from "../../hooks/useProduct";
import ItemDetailList from "./ItemDetailList";
import { useParams } from "react-router-dom";


function ItemDetailContainer(){
    const {ItemId} = useParams ();
    const {product, isLoading : product2loading} = useProduct (Number(ItemId));
    
    if(product2loading) return <h1>Cargando...</h1>;

    return (

        <div>
            <ItemDetailList product={product} />
        </div>

    )
}
export default ItemDetailContainer;
