import { useContext, useState } from "react"
import CartContext from "../../context/CartContext";
import { addDoc, collection, doc, getDoc, getFirestore, serverTimestamp } from "firebase/firestore";
import useBuyer from "../../hooks/useBuyer";

import CartItem from "../CartItem/CartItem";



export default function Checkout() {
    const { cart, totalPrice, cleanCart } = useContext(CartContext);
    const { buyer, handleInputChange } = useBuyer();
    const [idOrderGuardada, setIdOrderGuardada] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const order = {
            buyer,
            cart,
            totalPrice,
            orderDate: serverTimestamp(),
        };

        const db = getFirestore();
        for (const itemInCart of cart) {
            const productRef = doc(db, "products", itemInCart.product.id);
            const product = await getDoc(productRef);
            const productData = product.data();
            if (productData.stock < itemInCart.cantidad) {
                alert(`No hay stock suficiente para el producto ${productData.title}`);
                return;
            }
        }

        const ordersCollection = collection(db, "orders");


        addDoc(ordersCollection, order).then(async ({ id }) => {
            alert(`Compra realizada con éxito, tu número de orden es: ${id}`);

            setIdOrderGuardada(id);
            cleanCart();



            for (const itemInCart of cart) {
                const productRef = doc(db, "products", itemInCart.product.id);
                const product = await getDoc(productRef);
                const productData = product.data();

                const newStock = productData.stock - itemInCart.cantidad;
                
                await updateDoc(productRef, { stock: newStock });
            }
        });
    };


    return (
        <div>
            {idOrderGuardada ? (   
                setTimeout(() => {
                window.location.href = '/';
            }, 3000))
            :
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "10px", width: "50%" }}>
                <label for="name"> Nombre </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Nombre del comprador"
                    name="name"
                    value={buyer.name}
                    onChange={handleInputChange}
                />

                <br />
                <label for="lastName"> Apellido </label>
                <input
                    id="lastName"
                    type="text"
                    placeholder="Apellido"
                    name="lastName"
                    value={buyer.lastName}
                    onChange={handleInputChange}
                />

                <br />
                <label for="email"> Email </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={buyer.email}
                    onChange={handleInputChange}

                />
                <br />
                {cart.map((prod) => (
                    <>
                        <CartItem key={prod.product.id} prod={prod} />
                    </>
                )

                )}
                <br />
                <button style={{width:"50%", borderRadius:"5px", border:"1px solid"}} type="submit"> Comprar </button>
            </form>
            }
        </div>

    )
}