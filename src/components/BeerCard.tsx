import { Link } from "react-router";
import { Beer } from "../interfaces/Beer";

function BeerCard({ beer }: {beer: Beer}) {
    return (
        <div className="max-w-sm border border-gray-200 bg-white overflow-hidden">

            <img
                className="w-full h-48 object-cover"
                src="/src/assets/images/beer_test.jpg" 
                alt="photo de bière"
            />
            <div className="p-4">

                <h3 className="text-xl font-semibold text-gray-800">{beer.name}</h3>

                <p className="mt-2 text-gray-600">{beer.description}</p>

                <div className="mt-4 flex justify-between">
                <div className=" flex items-center justify-center text-gray-500 text-lg font-bold gap-2">
                    <span>{beer.abv} % vol</span>
                    <span>|</span>
                    <span>Ibu: {beer.ibu}</span>
                </div>
                <div className="text-right ">
                    <Link to={`/beers/${beer.id}`}>
                        <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full font-medium text-gray-500 transition-all duration-300 hover:w-32">
                            <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">Voir plus</div>
                            <div className="absolute right-3.5">
                                <img src="/src/assets/icons/arrow_right.svg" alt="" />
                            </div>
                        </button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BeerCard;