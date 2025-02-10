import { Beer } from "../interfaces/Beer";

const apiUrl = "http://localhost:3000/api";


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