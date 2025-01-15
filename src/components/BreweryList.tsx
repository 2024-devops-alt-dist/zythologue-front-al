import { useEffect, useState } from "react"
import { Brewery } from "../interfaces/Brewery";
import { fetchBreweries } from "../services/BreweryService";
import BreweryCard from "./BreweryCard";

function BreweryList() {

    const [breweries, setBreweries] = useState<Brewery[]>([]);

    const getBreweries = async () => {
        try {
            const data: Brewery[] = await fetchBreweries();
            setBreweries(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getBreweries()
    }, []);
    
    return (
        <div className="container mx-auto my-10 flex flex-wrap justify-center gap-5">
            {breweries.map((brewery: Brewery) => {
                return <BreweryCard key={brewery.id} brewery={brewery} />
            })}
        </div>
    )
}

export default BreweryList;