
const products =[
    {
    id: 1,
    title: "Remera oversize",
    price: 12000,
    description: "Remera oversize Blanca.",
    image: " https://media.istockphoto.com/id/1299457559/es/foto/joven-en-blanco-camiseta-oversize-maqueta-frontal-y-posterior-utilizada-como-plantilla-de.jpg?s=1024x1024&w=is&k=20&c=R0ez6qW9vV4VRhiSwrezVKt3b9oTKxAmFZ6pC2DM08A=",
    category: "remeras",
    stock: 3,
    },
    {
        id: 2,
        title: "Pantalon Oversize",
        price: 30000,
        description: "Pantalon de Jean.",
        image: " ",
        category: "pantalones",
        stock: 5,
    },
    {
        id: 3,
        title: "Buzo Oversize ",
        price: 25000,
        description: "Buzo oversize.",
        image: " ",
        category: "buzos",
        stock: 10,
    }
    ,
    {
        id: 4,
        title: "Zapatillas ",
        price: 70000,
        description: "Zapatillas edicion especial.",
        image: " ",
        category: "zapatillas",
        stock: 6,
    },
    {
        id: 5,
        title: "Remera oversize",
        price: 12000,
        description: "Remera oversize Negra.",
        image: " ",
        category: "remeras",
        stock: 3,
        },
        {
            id: 6,
            title: "Cadena de Acero",
            price: 8000,
            description: "Cadena acero inoxidable.",
            image: " ",
            category: "accesorios",
            stock: 10,
        },
        {
            id: 7,
            title: "Aros de oro",
            price: 5000,
            description: "Aros tamaño mediano de oro.",
            image: " ",
            category: "accesorios",
            stock: 7,
        }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products);
        }, 2000)
    });
}

/* export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products.find((product) => product.id === id));
        }, 2000)
    });
} */

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products.filter((product) => product.category === category ) );
            
        }, )
    });
}