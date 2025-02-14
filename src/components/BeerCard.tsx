import { Link } from "react-router";
import { Beer } from "../interfaces/Beer";
import ArrowButton from "./ArrowButton";
import { Category } from "../interfaces/Category";

function BeerCard({ beer, category, photoUrl }: {beer: Beer, category: Category, photoUrl: string }) {

    return (
        <div className="max-w-md bg-zinc-800 border border-zinc-500 lg:flex lg:max-w-lg">
            {photoUrl ? (
                <img src={`/src/assets/images/${photoUrl}`} alt="Photo de bière" className="max-w-sm lg:max-w-44" />
            ) : (
                <img src="/src/assets/images/beer_logo.png" alt="Photo de bière" className="object-scale-down max-w-sm lg:max-w-44" />
            )}
            <div className="flex flex-col justify-around p-4">

                <h3 className="text-xl font-semibold text-white uppercase">{beer.name}</h3>

                <p className="mt-2 text-zinc-500">{category.name}</p>

                <p className="mt-2 text-zinc-500">{beer.description}</p>

                <div className="mt-4 flex justify-between">
                    <div className=" flex items-center justify-center text-zinc-500 text-lg font-bold gap-2">
                        <span>ABV {beer.abv}%</span>
                        <span>IBU {beer.ibu}</span>
                    </div>
                    <div className="text-right ">
                        <Link to={`/beers/${beer.id}`}>
                            <ArrowButton color="white" text="Voir plus" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeerCard;