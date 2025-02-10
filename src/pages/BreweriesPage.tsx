import { useEffect, useState } from "react";
import BreweryList from "../components/BreweriesList";
import { fetchBreweries } from "../services/BreweryService";
import { Brewery } from "../interfaces/Brewery";
import filterData from "../utils/functions/filterData";
import Header from "../components/Header";

function BreweriesPage() {

    const [breweries, setBreweries] = useState<Brewery[]>([]);
    const [fetchedBreweries, setFetchedBreweries] = useState<Brewery[]>([]);
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

    const handleResetClick = () => {
        setBreweries(fetchedBreweries);
        setSearchInput("");
    };

    useEffect(() => {
        getBreweries();
    }, []);

    useEffect(() => {
        setBreweries(filterData(fetchedBreweries, searchInput, "name"));
    }, [searchInput]);
    
    return (
        <>
            <Header title="Brasseries" description="Retrouvez toutes les brasseries disponibles sur notre site."/>
            <section className="flex justify-center bg-black p-10">
                <div className="w-full flex justify-center items-center flex-wrap gap-5">
                    <div className="w-full max-w-md">
                        <input
                            className="w-full bg-zinc-800 placeholder:text-zinc-400 text-zinc-400 border border-black rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-green-400"
                            placeholder="Entrez votre recherche" 
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button className="text-white" onClick={handleResetClick}>Réinitialiser</button>
                    </div>
                </div>
            </section>
            {breweries.length === 0 ? 
                <section className="flex justify-center flex-wrap bg-black p-10 min-h-72">
                    <p className="text-zinc-400 text-4xl">Oups, aucune brasserie n'a été trouvé.</p>
                </section> :
                <BreweryList breweries={breweries} />
            }
        </>
    );
}

export default BreweriesPage;