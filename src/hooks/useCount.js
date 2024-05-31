import { useState } from "react";


export default function useCount (initialValue = 0) {
    const [counter, setCount] = useState(initialValue);

    const incrementar =()=>{
            setCount(counter+1);
    }

    const decrementar =()=>{
        setCount(counter-1);
    }
    
    const reset = () => {
        setCount(initialValue);
    }

    return { counter, incrementar,decrementar, reset};
}