import { Photo } from "../interfaces/Photo";

const apiUrl = "http://localhost:3000/api";


export const fetchPhotos = async (): Promise<Photo[]> => {
    const res = await fetch(`${apiUrl}/photos`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) {
        throw new Error(res.status + ' - error fetching photos');
    }
    let photos: Photo[] = [];
    const data = await res.json();
    for (const element of data) {  
        const photo: Photo = {
            id: element.photo_id,
            beerId: element.beer_id,
            url: element.url
        };
        photos.push(photo);
    }
    return photos;
}
    
export const fetchPhotoById = async (id: any) => {
    const res = await fetch(`${apiUrl}/photos/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) {
        throw new Error(res.status + ' - error fetching the photo');
    }
    const data = await res.json();
    const photo: Photo = {
        id: data.photo_id,
        beerId: data.beer_id,
        url: data.url
    };
    return photo;
}