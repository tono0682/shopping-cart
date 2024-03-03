import { NavLink } from "react-router-dom";
import { useShop } from "../context/useShop";

function NavBar() {
    const { getCartItemCount } = useShop();
    const pages = [
        {
            directory: "/shop",
            name: "Shop"
        },
        {
            directory: "shoppingcart",
            name: `My Cart (${getCartItemCount()})`
        },
        {
            directory: "contact",
            name: "Contact"
        },
    ]

    return (
        <div className="flex justify-around bg-black bg-opacity-90 py-2">
            {pages.map((page)=>(
                <NavLink 
                    key={page.name}
                    to={page.directory} 
                    className={({ isActive, isPending, isTransitioning }) =>
                        [
                            "text-xl",
                            isPending ? "text-purple-500" : "",
                            isActive ? "text-primary font-bold underline" : "text-secondary",
                            isTransitioning ? "text-green-500" : "",
                        ].join(" ")
                    }
                >
                    {page.name}
                </NavLink>
            ))}
        </div>
    )
}

export default NavBar