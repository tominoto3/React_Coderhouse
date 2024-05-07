import CategoryProducts from "./CategoryProducts";
import '../ListItem/Item.css'

export default function CategoryList ({ products }){
    return (
        
        <div className="Item-list-container">
            {products.map((product)=> (
                <CategoryProducts key={product.id} item={product}/>
            ))}
        </div>
    )
}
