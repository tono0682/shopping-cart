import { Link } from "react-router-dom"

function Hero() {
    return(
        <div className="flex flex-col justify-center items-center gap-x-8 gap-y-4 p-2 rounded-xl w-full max-w-[850px]">
            <h1 className="text-xl sm:text-3xl font-bold text-primary text-center">
                Explore AmaZone - Your Ultimate Shopping Destination
            </h1>
            <p>
                Step into AmaZone, your ultimate shopping destination where every click opens a world of possibilities. With an unparalleled selection, unbeatable prices, and exceptional service, AmaZone transforms your shopping journey. Start exploring today and discover the magic of Amazone.
            </p>
            <Link
                to={"/shop"}
                className="inline-block bg-primary hover:bg-primaryLight text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            >
                Shop Now
            </Link>
        </div>
    )
}

export default Hero