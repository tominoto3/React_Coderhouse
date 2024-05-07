
import { useParams } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
import CategoryList from "./CategoryProductsList";

function CategoryContainer(){
    const {CategoryId} = useParams ();
    const {products, isLoading : categoryLoading} = useCategory (CategoryId);
    
    if(categoryLoading) return <h1>Cargando...</h1>;

    return (
        
        <div>
            <CategoryList products={products} />
        </div>
    )
}
export default CategoryContainer;
