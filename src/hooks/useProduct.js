import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";



export default function useProduct(id){
    const [product,setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
        
        useEffect(() => {
            const db = getFirestore();
            const productRef = doc(db, "products", id);
        
            getDoc(productRef)
                .then((snapshot) => {
                    setProduct({ ...snapshot.data(), id: snapshot.id});
                
                })
                .finally(()=>{ 
                    setIsLoading(false);
                });
        },[id]);
        
        return {product, isLoading};
    }