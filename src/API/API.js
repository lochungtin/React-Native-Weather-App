export const fetchLocations = async (searchTerm) => {
    const search = await fetch('https://www.metaweather.com/api/location/search/?query=' + searchTerm);
    const response = await search.json();
    return response;
}

export const fetchLocation = async (woeid) => {
    const search = await fetch('https://www.metaweather.com/api/location/' + woeid + '/');
    const response = await search.json();
    return response;
}