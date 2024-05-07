
import ItemList from "../ListItem/ItemList";
import useProducts from "../../hooks/useProducts";




function ItemListContainer (){
    const {isLoading : productsLoading, products } = useProducts();

    if(productsLoading) return <h1>Cargando...</h1>;

    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;
