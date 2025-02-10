import { Beer } from "../interfaces/Beer"
import { Category } from "../interfaces/Category";
import BeerCard from "./BeerCard";

function BeersList({ beers, categories }: { beers: Beer[], categories: Category[] }) {
    
    return (
        <div className="px-auto py-10 flex flex-wrap justify-center gap-5 bg-black">
            {beers.map((beer: Beer) => {                
                let category = { id: 0, name: "", description: "" };
                for (let c of categories) {
                    if (beer.categoryId === c.id) {
                        category = c;
                    }
                }
                return <BeerCard key={beer.id} beer={beer} category={category} />
            })}
        </div>
    )
}

export default BeersList;