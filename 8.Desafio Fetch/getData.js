import url from './Api.js';

async function getData() {
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error("Error al obtener los Pokémon");
        }
        const dataJson = await response.json();  
        return dataJson.results; 

    } catch (error) {
        console.log(error.message);
    }
}

export default getData;