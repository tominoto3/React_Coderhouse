import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";



export default function useProducts(CategoryId) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const db = getFirestore();

        const productsCollection = collection(db, "products");
        const productsQuery = CategoryId ? query(productsCollection, where("categoryId", "==", CategoryId)) : productsCollection;

        getDocs(productsQuery)
            .then((snapshot) => {
                setProducts(snapshot.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                }
                ));
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [CategoryId]);


    return {
        products,
        isLoading
    };
}