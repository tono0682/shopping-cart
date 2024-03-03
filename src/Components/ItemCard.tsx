import { Link } from "react-router-dom";
import { Product } from "../Interfaces/Product";
import { capitalCase } from "change-case";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

interface ItemCardProps {
    item: Product;
}

function ItemCard({ item }: ItemCardProps): JSX.Element {

    return (
        <>
        <Link to={`/shop/${item.id}`} className="block transition duration-300 ease-in-out hover:scale-105">
            <div className=" rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex flex-col justify-between items-center h-full">
                <div
                    className="h-40 w-full bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${item.thumbnail})`, backgroundSize: 'contain' }}
                >
                </div>

                <div className="w-full p-6 m-1 border-t-2 border-primary flex flex-col justify-between gap-5 grow">
                    <h4 className="text-xl font-bold leading-tight text-neutral-800">
                        {capitalCase(item.title)}
                    </h4>
                    <p className="text-base text-neutral-600">
                        {formatter.format(item.price)}
                    </p>
                </div>
            </div>
        </Link>
        </>
    );
}

export default ItemCard;

