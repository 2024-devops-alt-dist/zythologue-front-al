import { Link } from "react-router";
import { Brewery } from "../interfaces/Brewery";
import ArrowButton from "./ArrowButton";

function BreweryCard({ brewery }: {brewery: Brewery}) {
    return (
        <div className="max-w-sm bg-zinc-800 border border-zinc-500">

            <img
                className="w-full h-48 object-cover"
                src="/src/assets/images/brewery_test.jpg" 
                alt="photo de bière"
            />
            <div className="p-4">

                <h3 className="text-xl text-white uppercase">{brewery.name}</h3>
                <p className="mt-2 text-l text-gray-500">{brewery.country}</p>

                <div className="mt-4 text-gray-500">
                    <a href={brewery.link} target="_blank">{brewery.link}</a>
                    <p>{brewery.email}</p>

                <div className="text-right ">
                    <Link to={`/breweries/${brewery.id}`}>
                        <ArrowButton color="white" text="Voir plus" />

                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BreweryCard;