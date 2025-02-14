import { useEffect, useState } from "react";
import { fetchCategories } from "../services/CategoryService";
import { Category } from "../interfaces/Category";
import { Brewery } from "../interfaces/Brewery";
import { fetchBreweries } from "../services/BreweryService";
import { Beer } from "../interfaces/Beer";
import { createBeer } from "../services/BeerService";

function BeerForm() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [breweries, setBreweries] = useState<Brewery[]>([]);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [breweryId, setBreweryId] = useState<number>(0);
    const [categoryId, setCategoryId] = useState<number>(0);
    const [abv, setAbv] = useState<number>(0);
    const [ibu, setIbu] = useState<number>(0);
    const [message, setMessage] = useState<string>("");
    
    const getCategories = async () => {
        try {
            const data: Category[] = await fetchCategories();
            setCategories(data);
        } catch(error) {
            console.error(error);
        }
    }

    const getBreweries = async () => {
        try {
            const data: Brewery[] = await fetchBreweries();
            setBreweries(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const beer: Beer = {
            breweryId: breweryId,
            categoryId: categoryId,
            name: name,
            description: description,
            abv: abv,
            ibu: ibu
        };
        const createdBeer = await createBeer(beer);
        if (createdBeer) {
            setMessage("La bière a été créé avec succès !")
        }
    }

    useEffect(() => {        
        getCategories();
        getBreweries();
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit} className="p-10 w-full max-w-lg bg-black border border-zinc-700 rounded-md">
                <div className="flex flex-col">
                    <label htmlFor="name">Nom :</label>
                    <input id="name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-zinc-800 placeholder:text-zinc-400 text-zinc-400 border border-black rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-green-400" required />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description">Description :</label>
                    <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-zinc-800 placeholder:text-zinc-400 text-zinc-400 border border-black rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-green-400" required></textarea>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="category">Catégorie :</label>
                    <select name="category" value={categoryId} onChange={(e) => setCategoryId(parseInt(e.target.value))} className="bg-zinc-800 placeholder:text-zinc-400 text-zinc-400 border border-black rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-green-400" required>
                            <option value={0}>Sélectionner une catégorie</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="brewery">Brasserie :</label>
                    <select name="brewery" value={breweryId} onChange={(e) => setBreweryId(parseInt(e.target.value))} className="bg-zinc-800 placeholder:text-zinc-400 text-zinc-400 border border-black rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-green-400" required>
                            <option value={0}>Sélectionner une brasserie</option>
                        {breweries.map(brewery => (
                            <option key={brewery.id} value={brewery.id}>{brewery.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="abv">Taux d'alcool(abv) :</label>
                    <input id="abv" name="abv" value={abv} onChange={(e) => setAbv(parseInt(e.target.value))} type="number" className="bg-zinc-800 placeholder:text-zinc-400 text-zinc-400 border border-black rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-green-400" required />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="ibu">Amertume(ibu) :</label>
                    <input id="ibu" name="ibu" value={ibu} onChange={(e) => setIbu(parseInt(e.target.value))} type="number" className="bg-zinc-800 placeholder:text-zinc-400 text-zinc-400 border border-black rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-green-400" required />
                </div>

                <p className="text-green-600">{message}</p>
                <div className="text-end">
                    <button type="submit" className="my-10 rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">Créer</button>
                </div>

            </form>
        </>
    );
};

export default BeerForm;
