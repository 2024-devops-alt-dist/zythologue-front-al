import { Beer } from "../interfaces/Beer";

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchBeers = async (): Promise<Beer[]> => {
    const res = await fetch(`${apiUrl}/beers`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) {
        throw new Error(res.status + ' - error fetching beers');
    }
    let beers: Beer[] = [];
    const data = await res.json();
    for (const element of data) {  
        const beer: Beer = {
            id: element.beer_id,
            breweryId: element.brewery_id,
            categoryId: element.category_id,
            name: element.name,
            description: element.description,
            abv: element.abv,
            ibu: element.ibu,
        };
        beers.push(beer);
    }
    return beers;
}
    
export const fetchBeerById = async (id: any) => {
    const res = await fetch(`${apiUrl}/beers/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) {
        throw new Error(res.status + ' - error fetching the beer');
    }
    const data = await res.json();
    const beer: Beer = {
        id: data.beer_id,
        breweryId: data.brewery_id,
        categoryId: data.category_id,
        name: data.name,
        description: data.description,
        abv: data.abv,
        ibu: data.ibu,
    };
    return beer;
}

export const createBeer = async (beer: Beer) => {
    const res = await fetch(`${apiUrl}/beers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            brewery_id: beer.breweryId,
            category_id: beer.categoryId,
            name: beer.name,
            description: beer.description,
            abv: beer.abv,
            ibu: beer.ibu
        })
    })
    if (!res.ok) {
        throw new Error(res.status + ' - error during beer creation');
    }
    const data = await res.json();
    const createdBeer: Beer = {
        id: data.beer_id,
        breweryId: data.brewery_id,
        categoryId: data.category_id,
        name: data.name,
        description: data.description,
        abv: data.abv,
        ibu: data.ibu,
    };
    return createdBeer;

}