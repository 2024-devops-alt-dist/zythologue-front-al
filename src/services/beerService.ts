const apiUrl = "http://localhost:3000/api/";

const fetchBeers = async () => {
    try {
        const res = await fetch(apiUrl + "beers", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!res.ok) {
            throw new Error(res.status + ' - Error fetching beers');
        }
        console.log(res);
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }

}

export default fetchBeers