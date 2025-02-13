import { Beer } from "../interfaces/Beer"
import { Category } from "../interfaces/Category";
import { Photo } from "../interfaces/Photo";
import BeerCard from "./BeerCard";

function BeersList({ beers, categories, photos }: { beers: Beer[], categories: Category[], photos: Photo[] }) {
    
    return (
        <div className="px-auto py-10 flex flex-wrap justify-center gap-5 bg-black">
            {beers.map((beer: Beer) => {                
                let category = { id: 0, name: "", description: "" };
                for (let c of categories) {
                    if (beer.categoryId === c.id) {
                        category = c;
                    }
                }
                let photo = {id: 0, beerId: 0, url: "" };
                for (let p of photos) {
                    if (beer.id === p.beerId) {
                        photo = p;
                    }
                }
                return <BeerCard key={beer.id} beer={beer} category={category} photoUrl={photo.url} />
            })}
        </div>
    )
}

export default BeersList;