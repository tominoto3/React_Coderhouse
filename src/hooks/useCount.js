import { useState } from "react";


export default function useCount (initialValue = 0) {
    const [counter, setCount] = useState(initialValue);

    const incrementar =()=>{
            setCount(counter+1);
    }

    const decrementar =()=>{
        setCount(counter-1);
    }
    return { counter, incrementar,decrementar};
}