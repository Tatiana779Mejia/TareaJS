import getData from './getData.js';

async function showData() {
    const data = await getData(); 

    let div = document.getElementById("content");  

    if (data && data.length > 0) {
    
        data.forEach(pokemon => {
            let p = document.createElement("p");  
            p.innerHTML = pokemon.name;  
            div.appendChild(p);  
        });
    } else {
        
        div.innerHTML = "<p>No se pudieron obtener los Pokémon</p>";
    }
}

export default showData;