import { useEffect, useState } from "react";
import { fetchBeerById } from "../services/BeerService";
import { Link, useParams } from "react-router";
import { fetchBreweryById } from "../services/BreweryService";
import { Beer } from "../interfaces/Beer";
import { Brewery } from "../interfaces/Brewery";
import { fetchCategoryById } from "../services/CategoryService";
import { Category } from "../interfaces/Category";
import { Photo } from "../interfaces/Photo";
import { fetchPhotos } from "../services/PhotoService";

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
    const [category, setCategory] = useState<Category>({
        id: 0,
        name: "",
        description: ""
    });
    const [photo, setPhoto] = useState<Photo>({
        id: 0,
        beerId: 0,
        url: ""
    });

    const { id } = useParams();

    const getBeer = async () => {
        try {
            const beerData: Beer = await fetchBeerById(id);
            setBeer(beerData);         
        } catch (error) {
            console.error(error);
        }
    }

    const getBrewery = async (breweryId: number) => {
        try {        
            const breweryData: Brewery = await fetchBreweryById(breweryId);
            setBrewery(breweryData);
        } catch (error) {
            console.error(error);
        }
    }

    const getCategory = async (categoryId: number) => {
        try {
            const categoryData: Category = await fetchCategoryById(categoryId);
            setCategory(categoryData);
        } catch (error) {
            console.error(error);
        }
    }

    const getPhoto = async (beerId: number) => {
        try {
            const data: Photo[] = await fetchPhotos();
            for (let photo of data) {
                if (photo.beerId === beerId) {
                    setPhoto(photo);
                }
            }
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (id) {
            getBeer();
        }
    }, [id]);
    
    useEffect(() => {
        if (beer.breweryId) {
            getBrewery(beer.breweryId);
        }
    }, [beer.breweryId]);
    
    useEffect(() => {
        if (beer.categoryId) {
            getCategory(beer.categoryId);
        }
    }, [beer.categoryId]);
    
    useEffect(() => {
        if (beer.id) {
            getPhoto(beer.id);
        }
    }, [beer.id]);

    return (
        <section id="beer" className="w-full">
            <div className="flex flex-col-reverse md:flex-row bg-black">
                <img className="w-full object-cover md:w-1/4 md:mb-0" src={`/src/assets/images/${photo.url}`} alt={beer.name} />

                <div className="flex flex-col gap-10 p-10 md:w-3/4">
                    <div className="md:flex gap-10 text-gray-950 text-4xl">
                        <h2 className="text-green-600 uppercase">{beer.name}</h2>
                        <Link to={`/breweries/${beer.breweryId}`} className="text-white hover:underline">
                            {brewery.name}
                        </Link>
                    </div>
                    <hr className="border-zinc-500" />
                    <p className="text-white text-xl">{beer.description}</p>
                    <p className="text-green-600 text-xl">{category.name}<span className="text-white text-xl"> - {category.description}</span></p>
                    <hr className="border-zinc-500" />

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

                <div className="flex flex-col gap-10 p-10 md:w-3/4">
                    <div className="lg:flex gap-10 text-gray-950 text-4xl">
                        <h2 className="text-green-600 uppercase">Ingrédients</h2>
                    </div>
                    <hr className="border-zinc-500" />

                </div>
                <img className="w-full object-cover mb-5 md:w-1/4 md:mb-0" src="/src/assets/images/hop.jpg" alt={beer.name} />
            </div>
        </section>
    )
}

export default BeerDetailPage;