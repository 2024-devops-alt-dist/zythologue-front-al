import { useEffect, useState } from "react";
import BeersList from "../components/BeersList";
import { Beer } from "../interfaces/Beer";
import { fetchBeers } from "../services/BeerService";

function BeersPage() {

    const [beers, setBeers] = useState<Beer[]>([]);

    const getBeers = async () => {
        try {
            const data: Beer[] = await fetchBeers();
            setBeers(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getBeers()
    }, []);

    return (
        <BeersList beers={beers} />
    );
}

export default BeersPage;