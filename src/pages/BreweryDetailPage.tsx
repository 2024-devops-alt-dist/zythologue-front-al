import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchBreweryById } from "../services/BreweryService";
import { Brewery } from "../interfaces/Brewery";
import { Beer } from "../interfaces/Beer";
import { fetchBeers } from "../services/BeerService";
import BeersList from "../components/BeersList";

function BreweryDetailPage() {

    const [brewery, setBrewery] = useState<Brewery>({
        id: 0,
        name: "",
        address: "",
        country: "",
        description: "",
        link: "",
        email: ""
    });
    const [beers, setBeers] = useState<Beer[]>([]);
    const { id } = useParams();

    const getDetails = async () => {
        try {      
            const breweryData: Brewery = await fetchBreweryById(id);
            setBrewery(breweryData);
            const beersData: Beer[] = await fetchBeers();
            const beersBrewery: Beer[] = [];
            for (const element of beersData) {
                if (element.breweryId === breweryData.id) {
                    beersBrewery.push(element);
                }
            }
            setBeers(beersBrewery);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <>
            <section className="container mx-auto my-10 lg:flex gap-10 p-10 rounded-3xl w-full border">
                <div className="rounded-lg w-full mb-5 lg:max-w-72 ">
                    <img className="w-full object-cover rounded-2xl" src="/src/assets/images/brewery_test.jpg" alt={brewery.name} />
                </div>
                <div className="">
                    <div className="">
                        <h2 className="text-gray-950 font-extrabold text-4xl">{brewery.name}</h2>
                        <p className="text-2xl text-gray-500">{brewery.country}</p>
                    </div>

                    <p className="text-gray-500 text-xl">{brewery.description}</p>
                    <div className="mt-5">
                        <h2 className="text-2xl text-gray-900">Contact :</h2>
                        <p className="text-gray-500 text-xl">{brewery.address}</p>
                        <p className="text-gray-500 text-xl">{brewery.email}</p>
                    </div>
                    <div className="mt-5">
                    <h2 className="text-2xl text-gray-900">Retrouvez plus de détails sur le site :</h2>
                    <a href={brewery.link} target="_blank" className="text-gray-500 text-xl hover:underline">{brewery.link}</a>
                    </div>
                </div>
            </section>
            <BeersList beers={beers} />
        </>
    )
}

export default BreweryDetailPage;