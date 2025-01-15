import { Brewery } from "../interfaces/Brewery";

const apiUrl = "http://localhost:3000/api";


export const fetchBreweries = async (): Promise<Brewery[]> => {
    const res = await fetch(`${apiUrl}/breweries`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) {
        throw new Error(res.status + ' - Error fetching breweries');
    }
    let breweries: Brewery[] = [];
    const data = await res.json();
    for (const element of data) {
        const brewery: Brewery = {
            id: element.brewery_id,
            name: element.name,
            address: element.address,
            country: element.country,
            description: element.description,
            link: element.link,
            email: element.email
        };
        breweries.push(brewery);
    }
    return breweries;
}
    
export const fetchBreweryById = async (id: any) => {
    const res = await fetch(`${apiUrl}/breweries/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) {
        throw new Error(res.status + ' - Error fetching the brewery');
    }
    const data = await res.json();
    const brewery: Brewery = {
        id: data.brewery_id,
        name: data.name,
        address: data.address,
        country: data.country,
        description: data.description,
        link: data.link,
        email: data.email
    };
    return brewery;
}