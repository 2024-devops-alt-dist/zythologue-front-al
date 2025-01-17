import { Beer } from "../interfaces/Beer"
import BeerCard from "./BeerCard";

function BeersList({ beers }: {beers: Beer[]}) {
    
    return (
        <div className="px-auto py-10 flex flex-wrap justify-center gap-5 bg-black">
            {beers.map((beer: Beer) => {
                return <BeerCard key={beer.id} beer={beer} />
            })}
        </div>
    )
}

export default BeersList;