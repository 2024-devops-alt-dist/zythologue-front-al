import { useEffect, useState } from "react";
import BeersList from "../components/BeersList";
import { Beer } from "../interfaces/Beer";
import { fetchBeers } from "../services/BeerService";
import filterData from "../utils/functions/filterData";
import Header from "../components/Header";

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
            <Header title="Bières" description="Retrouvez toutes les bières disponible sur notre site." />

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

            <BeersList beers={beers} />
        </>
    );
}

export default BeersPage;