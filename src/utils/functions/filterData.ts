function filterData<T>(data: T[], searchString: string, key: keyof T): T[] {
    let searchResult: T[] = [];    
    for (const item of data) {
        const propertyValue = item[key];
        if (typeof item[key] !== 'string') {
            return data;
        }
        if (searchString === "") {
            return data;
        } 
        if (typeof propertyValue === 'string' && propertyValue.toLowerCase().includes(searchString)) {                
            searchResult.push(item);
        }
    }
    return searchResult;
}

export default filterData;