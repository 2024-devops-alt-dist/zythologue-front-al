import { Category } from "../interfaces/Category";

const apiUrl = import.meta.env.API_URL;


export const fetchCategories = async (): Promise<Category[]> => {
    const res = await fetch(`${apiUrl}/categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) {
        throw new Error(res.status + ' - error fetching categories');
    }
    let categories: Category[] = [];
    const data = await res.json();
    for (const element of data) {
        const category: Category = {
            id: element.category_id,
            name: element.name,
            description: element.description
        };
        categories.push(category);
    }
    return categories;
}
    
export const fetchCategoryById = async (id: any) => {
    const res = await fetch(`${apiUrl}/categories/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) {
        throw new Error(res.status + ' - error fetching the category');
    }
    const data = await res.json();
    const category: Category = {
        id: data.category_id,
        name: data.name,
        description: data.description,
    };
    return category;
}