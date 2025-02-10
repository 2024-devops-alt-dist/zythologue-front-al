function filterData<T>(data: T[], searchValue: string | number, key: keyof T): T[] {
    let searchResult: T[] = [];
    for (const item of data) {
        const propertyValue = item[key];       
        if (searchValue === "" || searchValue === 0) {
            return data;
        } 
        if (typeof searchValue === 'string') {
            if (typeof propertyValue === 'string' && propertyValue.toLowerCase().includes(searchValue)) {                
                searchResult.push(item);
            }
        }
        if (typeof searchValue === 'number') {
            console.log(typeof searchValue, searchValue);   
            if (typeof propertyValue === 'number' && propertyValue === searchValue) {
                searchResult.push(item);
            }
        }
    }
    return searchResult;
}

export default filterData;