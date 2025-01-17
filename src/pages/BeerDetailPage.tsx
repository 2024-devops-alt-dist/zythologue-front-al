import { useEffect, useState } from "react";
import { fetchBeerById } from "../services/BeerService";
import { Link, useParams } from "react-router";
import { fetchBreweryById } from "../services/BreweryService";
import { Beer } from "../interfaces/Beer";
import { Brewery } from "../interfaces/Brewery";

function BeerDetailPage() {

    const [beer, setBeer] = useState<Beer>({
        id: 0,
        breweryId: 0,
        categoryId: 0,
        name: "",
        description: "",
        abv: 0,
        ibu: 0
    });
    const [brewery, setBrewery] = useState<Brewery>({
        id: 0,
        name: "",
        address: "",
        country: "",
        description: "",
        link: "",
        email: ""
    });
    const { id } = useParams();

    const getDetails = async () => {
        try {
            const beerData: Beer = await fetchBeerById(id);
            setBeer(beerData);         
            const breweryData: Brewery = await fetchBreweryById(beerData.breweryId);
            setBrewery(breweryData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <section className="my-10 w-full border lg:flex gap-10 lg:max-h-72">

            <img className="w-full object-cover mb-5 lg:max-w-72 lg:mb-0" src="/src/assets/images/beer_test.jpg" alt={beer.name} />

            <div className="flex flex-col gap-10">
            <div className="lg:flex gap-10 text-gray-950 font-extrabold text-4xl">
                <h2>{beer?.name}</h2>
                <span className="hidden lg:block">-</span>
                <Link to={`/breweries/${beer.breweryId}`} className="text-gray-500 hover:underline">
                    {brewery.name}
                </Link>
            </div>

            <p className="text-gray-500 text-xl">{beer.description}</p>

            <div className="flex gap-8 text-gray-700">
                <div className="flex flex-col">
                    <span className="text-lg font-semibold">ABV</span>
                    <span className="text-xl">{beer.abv}%</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-semibold">IBU</span>
                    <span className="text-xl">{beer.ibu}</span>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BeerDetailPage;