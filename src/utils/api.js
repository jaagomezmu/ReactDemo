// To fecth data from ~ punkapi.com ~

const API_URL = 'https://api.punkapi.com/v2/beers'

export const fecthBeers = async () => {
    
    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Error fetching beers');
        }

        const data = await response.json();
        return data;
    
    } catch (error) {
        console.error('Error fetching beers: ', error);
        throw Error
    }
};