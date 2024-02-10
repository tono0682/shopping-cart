import { Link } from "react-router-dom"

function Home() {
    return(
        <div className="bg-lime-200	">
            <h1>Home Page</h1>
            <div className="flex-col">
                <Link to={"shoppingcart"}>My Cart</Link>
                <p>Page2</p>
            </div>
        </div>
    )
}

export default Home