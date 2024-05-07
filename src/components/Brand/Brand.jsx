import { Link } from "react-router-dom";


function Brand(){
    return (
        <div>
            <h1 
                style={{
                    marginLeft: "50px",
                }}>
            <Link to={'/'}>Sunganolido</Link>
            </h1>
        </div>
    )
}

export default Brand;
