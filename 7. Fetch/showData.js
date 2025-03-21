import getData from "./getData.js";

async function showData() {
    const data = await getData(); 
    let div = document.getElementById("content"); 

    if (data && data.length > 0) {
    
        data.forEach(e => {
            let pe = document.createElement("p");
            pe.innerHTML = e.name; 
            div.appendChild(pe); 
        });
    } else {
        div.innerHTML = "<p>No se pudieron obtener los datos</p>";
    }
}

export default showData;