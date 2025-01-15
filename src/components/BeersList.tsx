import { Beer } from "../interfaces/Beer"
import BeerCard from "./BeerCard";

function BeersList({ beers }: {beers: Beer[]}) {
    
    return (
        <div className="container mx-auto my-10 flex flex-wrap justify-center gap-5">
            {beers.map((beer: Beer) => {
                return <BeerCard key={beer.id} beer={beer} />
            })}
        </div>
    )
}

export default BeersList;