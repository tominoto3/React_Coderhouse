import './ItemCount.css'
export default function ItemCount ({stock, counter, incrementar, decrementar}){

    return (
        <div className="itemcount_container">

            <div className="counter">
                <button onClick={decrementar}
                disabled={counter<=0}>
                -
                </button>

                <span>{counter}</span>

                <button 
                onClick={incrementar}
                disabled={counter>=stock}>
                + 
                </button>
            </div>

        </div>
    )
}