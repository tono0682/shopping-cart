import FeauturedItems from "../Components/FeaturedItems";
import Hero from "../Components/Hero";

export default function Home () {
    return (
      <div className="h-full flex flex-col justify-center items-center gap-4">
        <Hero />
        <FeauturedItems />
      </div>
    );
  }
  