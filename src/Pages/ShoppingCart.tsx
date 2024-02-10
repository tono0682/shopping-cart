import { Link } from "react-router-dom"

function ShoppingCart() {
    return(
        <div className="bg-lime-500	">
            <h1>CART PAGE</h1>
            <div className="flex-col">
                <Link to={"/"}>Home</Link>
                <p>Item2</p>
            </div>
        </div>
    )
}

export default ShoppingCart