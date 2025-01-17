import { useEffect, useState } from "react";
import BreweryList from "../components/BreweriesList";
import { fetchBreweries } from "../services/BreweryService";
import { Brewery } from "../interfaces/Brewery";
import filterData from "../utils/functions/filterData";
import Header from "../components/Header";

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
            <Header title="Brasseries" description="Retrouvez toutes les brasseries disponibles sur notre site."/>
            <section className="flex justify-center bg-black p-10">
                <div className="flex justify-center w-full">
                    <div className="w-full max-w-md">
                        <input
                            className="w-full bg-zinc-800 placeholder:text-zinc-400 text-zinc-400 border border-black rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-green-400"
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