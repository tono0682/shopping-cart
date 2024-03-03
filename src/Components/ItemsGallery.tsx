import {Product} from "../Interfaces/Product";
import ItemCard from "./ItemCard";

interface ItemsGalleryProps {
    items: Product[];
    category: string
}

function ItemsGallery({items, category}: ItemsGalleryProps): JSX.Element {

    let displayItems: Product[]

    if ( category !== "" ) {
        displayItems = items.filter((item)=> item.category === category);
    } else {
        displayItems = items
    }

    return(
        <div 
            className="mb-10 grid gap-8 py-4 justify-between"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}

        >
            {displayItems
            .map((item)=> (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ItemsGallery