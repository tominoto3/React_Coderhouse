import { useEffect, useState } from "react";
import { getProductsByCategory } from "../mock/asyncMock";

export default function useCategory(category){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect (() => {
        getProductsByCategory(category)
            .then((data) => setProducts(data))
            .finally(()=> setIsLoading(false));
    }, [category]);
    
    return {products, isLoading};
    
}