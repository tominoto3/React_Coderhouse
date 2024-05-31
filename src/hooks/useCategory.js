
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


export default function useCategory(category){
const [products,setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
        const db = getFirestore();

        const productsCollection = collection(db, "products");
        
        const q = query (productsCollection, where("categoryId", "==", category))

        getDocs(q)
            .then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            }
            ));
        })
        .finally(() => { 
            setIsLoading(false);
        });
    },[category]);
    

    return {
        products,
        isLoading
    };
}