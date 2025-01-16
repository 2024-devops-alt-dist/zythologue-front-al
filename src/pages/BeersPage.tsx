import { useEffect, useState } from "react";
import BeersList from "../components/BeersList";
import { Beer } from "../interfaces/Beer";
import { fetchBeers } from "../services/BeerService";
import filterData from "../utils/functions/filterData";

function BeersPage() {

    const [beers, setBeers] = useState<Beer[]>([]);
    const [fetchedBeers, setFetchedBeers] = useState<Beer[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");

    const getBeers = async () => {
        try {
            const data: Beer[] = await fetchBeers();
            setFetchedBeers(data);        
            setBeers(data);
        } catch (error) {
            console.error(error);
        }
    }
    
    const handleChange = (e: any) => {
        setSearchInput(e.target.value.toLowerCase());
    }

    useEffect(() => {
        getBeers();
    }, []);

    useEffect(() => {
        setBeers(filterData(fetchedBeers, searchInput, "name"))
    }, [searchInput])

    return (
        <>
            <section className="flex justify-center my-7">
                <div className="w-full max-w-sm">
                    <div className="w-full">
                        <input
                            className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 border border-gray-200 rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-300"
                            placeholder="Entrez votre recherche" 
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </section>

            <BeersList beers={beers} />
        </>
    );
}

export default BeersPage;