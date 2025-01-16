import { useEffect, useState } from "react";
import BreweryList from "../components/BreweriesList";
import { fetchBreweries } from "../services/BreweryService";
import { Brewery } from "../interfaces/Brewery";
import filterData from "../utils/functions/filterData";

function BreweriesPage() {

    const [breweries, setBreweries] = useState<Brewery[]>([]);
    const [fetchedbreweries, setFetchedBreweries] = useState<Brewery[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");

    const getBreweries = async () => {
        try {
            const data: Brewery[] = await fetchBreweries();
            setFetchedBreweries(data);
            setBreweries(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (e: any) => {
        setSearchInput(e.target.value.toLowerCase());
    }

    useEffect(() => {
        getBreweries();
    }, []);

    useEffect(() => {
        setBreweries(filterData(fetchedbreweries, searchInput, "name"));
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
            <BreweryList breweries={breweries} />
        </>
    );
}

export default BreweriesPage;