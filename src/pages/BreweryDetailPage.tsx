import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchBreweryById } from "../services/BreweryService";
import { Brewery } from "../interfaces/Brewery";
import { Beer } from "../interfaces/Beer";
import { fetchBeers } from "../services/BeerService";
import BeersList from "../components/BeersList";
import { Category } from "../interfaces/Category";
import { fetchCategories } from "../services/CategoryService";
import { Photo } from "../interfaces/Photo";
import { fetchPhotos } from "../services/PhotoService";

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
    const [categories, setCategories] = useState<Category[]>([]);
    const [photos, setPhotos] = useState<Photo[]>([]);
    
    
    const { id } = useParams();

    const getBrewery = async () => {
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

    const getPhotos = async () => {
        try {
            const data: Photo[] = await fetchPhotos();
            setPhotos(data);
        } catch(error) {
            console.error(error);
        }
    }

    const getBeers = async () => {
        try {
            const data: Beer[] = await fetchBeers();
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

    useEffect(() => {
        getBrewery();
        getBeers();
        getCategories();
        getPhotos();
    }, []);

    return (
        <>
            <section className="w-full py-5 bg-green-600">
                <div className="flex bg-black">
                    <img className="w-full object-cover mb-5 md:w-1/2 md:mb-0" src="/src/assets/images/brewery_test.jpg" alt={brewery.name} />

                    <div className="flex flex-col gap-10 p-10 md:w-1/2">
                        <div className="md:flex gap-10 items-center">
                            <h2 className="text-green-600 uppercase text-4xl">{brewery.name}</h2>
                            <p className="text-2xl text-white">{brewery.country}</p>
                        </div>
                        <hr />

                        <p className="text-white text-xl">{brewery.description}</p>

                        <hr />
                        <div>
                            <p className="text-white  text-xl"><span className="text-green-600">Adresse : </span>{brewery.address}</p>
                            <p className="text-white  text-xl"><span className="text-green-600">E-mail : </span>{brewery.email}</p>
                        </div>
                        <hr />
                        <div className="mt-5">
                            <span className="text-xl text-green-600">Site : </span><a href={brewery.link} target="_blank" className="text-white text-xl hover:underline">{brewery.link}</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black p-10 ">
                <h2 className="text-white text-4xl">Les bières proposées par cette brasserie :</h2>
                <BeersList beers={beers} categories={categories} photos={photos} />
            </section>
        </>
    )
}

export default BreweryDetailPage;