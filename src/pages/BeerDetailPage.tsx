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
        <section id="beer" className="w-full py-5 bg-green-600">
            <div className="flex flex-col md:flex-row bg-black">
                <img className="w-full object-cover md:w-1/2 md:mb-0" src="/src/assets/images/beer_test.jpg" alt={beer.name} />

                <div className="flex flex-col gap-10 p-10 md:w-1/2">
                    <div className="md:flex gap-10 text-gray-950 text-4xl">
                        <h2 className="text-green-600 uppercase">{beer.name}</h2>
                        <Link to={`/breweries/${beer.breweryId}`} className="text-white hover:underline">
                            {brewery.name}
                        </Link>
                    </div>
                    <hr className="text-green-600" />
                    <p className="text-white text-xl">{beer.description}</p>
                    <hr className="text-green-600" />

                    <div className="flex gap-8">
                        <div className="flex flex-col">
                            <span className="text-lg text-green-600">ABV</span>
                            <span className="text-xl text-white">{beer.abv}%</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg text-green-600">IBU</span>
                            <span className="text-xl text-white">{beer.ibu}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row bg-black">

                <div className="flex flex-col gap-10 p-10 md:w-1/2">
                    <div className="lg:flex gap-10 text-gray-950 text-4xl">
                        <h2 className="text-green-600 uppercase">Ingrédients</h2>
                    </div>
                    <hr className="text-green-600" />

                </div>
                <img className="w-full object-cover mb-5 md:w-1/2 md:mb-0" src="/src/assets/images/beer_3.jpg" alt={beer.name} />
            </div>
        </section>
    )
}

export default BeerDetailPage;