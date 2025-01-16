import { Brewery } from "../interfaces/Brewery";
import BreweryCard from "./BreweryCard";

function BreweryList({ breweries }: {breweries: Brewery[]}) {
    return (
        <div className="container mx-auto my-10 flex flex-wrap justify-center gap-5">
            {breweries.map((brewery: Brewery) => {
                return <BreweryCard key={brewery.id} brewery={brewery} />
            })}
        </div>
    )
}

export default BreweryList;