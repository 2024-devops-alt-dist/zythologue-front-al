import { useEffect, useState } from "react";
import BeersList from "../components/BeersList";
import { Beer } from "../interfaces/Beer";
import { fetchBeers } from "../services/BeerService";
import filterData from "../utils/functions/filterData";
import Header from "../components/Header";
import { Category } from "../interfaces/Category";
import { fetchCategories } from "../services/CategoryService";
import { Photo } from "../interfaces/Photo";
import { fetchPhotos } from "../services/PhotoService";

function BeersPage() {

    const [beers, setBeers] = useState<Beer[]>([]);
    const [fetchedBeers, setFetchedBeers] = useState<Beer[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<number>(0);

    const getBeers = async () => {
        try {
            const data: Beer[] = await fetchBeers();
            setFetchedBeers(data);      
            setBeers(data);
        } catch (error) {
            console.error(error);
        }
    }

    const getCategories = async () => {
        try {
            const data: Category[] = await fetchCategories();
            setCategories(data);
        } catch(error) {
            console.error(error);
        }
    }

    const getPhotos = async () => {
        try {
            const data: Photo[] = await fetchPhotos();
            setPhotos(data);
        } catch(error) {
            console.error(error);
        }
    }
    
    const searchInputOnChange = (e: any) => {
        setSearchInput(e.target.value.toLowerCase());
    }

    const filterCategoryOnChange = (e: any) => {
        setSelectedCategory(parseInt(e.target.value));
    }

    const handleResetClick = () => {
        setBeers(fetchedBeers);
        setSearchInput("");
        setSelectedCategory(0);
    }

    useEffect(() => {        
        getBeers();
        getCategories();
        getPhotos(); 
    }, []);

    useEffect(() => {
        setBeers(filterData<Beer>(beers, searchInput, "name"));
    }, [searchInput]);

    useEffect(() => {        
        setBeers(filterData<Beer>(beers, selectedCategory, "categoryId"));
    }, [selectedCategory]);

    return (
        <>
            <Header title="Bières" description="Retrouvez toutes les bières disponibles sur notre site." />

            <section className="flex justify-center flex-wrap bg-black px-20 py-10">
                <div className="w-full flex justify-center items-center flex-wrap gap-5">
                    <div className="">
                        <input
                            className="bg-zinc-800 placeholder:text-zinc-400 text-zinc-400 border border-black rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-green-400"
                            placeholder="Entrez votre recherche" 
                            onChange={searchInputOnChange}
                        />
                    </div>
                    <div>
                        <label className="text-white">
                            <select
                            className="bg-zinc-800 placeholder:text-zinc-400 text-zinc-400 border border-black rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-green-400"
                                value={selectedCategory}
                                onChange={filterCategoryOnChange}>
                                    <option value={0}>Sélectionner une catégorie</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <button className="text-white" onClick={handleResetClick}>Réinitialiser</button>
                    </div>
                </div>
            </section>
            {beers.length === 0 ? 
                <section className="flex justify-center flex-wrap bg-black p-10 min-h-72">
                    <p className="text-zinc-400 text-4xl">Oups, aucune bière n'a été trouvé.</p>
                </section> :
                <BeersList beers={beers} categories={categories} photos={photos} />
            }
        </>
    );
}

export default BeersPage;