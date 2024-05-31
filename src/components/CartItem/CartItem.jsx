

export default function CartItem({ prod }) {


    return (
        
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    
                        <div className="col-md-4">

                            <img className="img-fluid rounded-start" src={prod.product.imageUrl} alt={prod.product.title} />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{prod.product.title}</h5>
                                <p className="card-text">Precio Unit: ${prod.product.price}</p>
                                <p className="card-text">Precio Total: ${prod.product.price * prod.cantidad}</p>
                                <p className="card-text">Cant: {prod.cantidad}</p>
                            </div>
                        </div>
                    
                </div>

            </div>
        
            
    )
}