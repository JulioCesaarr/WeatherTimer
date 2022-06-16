const KEY = 'b14541d03a8745199ae145218221606';

const fetchdata = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`
    
    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();

    return data;
};

export default fetchdata;