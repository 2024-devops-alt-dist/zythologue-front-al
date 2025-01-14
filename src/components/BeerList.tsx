import { useEffect, useState } from "react"
import { Beer } from "../interfaces/Beer"
import BeerCard from "./BeerCard";
import fetchBeers from "../services/beerService";

function BeerList() {

    const [beers, setBeers] = useState<Beer[]>([]);

    const getBeers = async () => {
        const data = await fetchBeers();
        setBeers(data);
    }

    useEffect(() => {
        getBeers()
    }, []);

    return (
        <div className="container mx-auto my-10 flex flex-wrap justify-center gap-5">
            {beers.map((beer: Beer) => {
                return <BeerCard key={beer.id} beer={beer} />
            })}
        </div>
    )
}

export default BeerList