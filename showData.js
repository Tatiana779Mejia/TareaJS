import getData from "./getData.js";  // Importamos la función para obtener los datos

async function showData() {
    const data = await getData();  // Obtenemos los datos de la API
    const div = document.getElementById("content");  // Referencia al contenedor donde se mostrará la información

    if (data.length > 0) {
        // Si hay datos, los mostramos
        data.forEach((e) => {
            const pe = document.createElement("p");  // Creamos un párrafo por cada elemento
            pe.innerHTML = e.name;  // Establecemos el nombre de usuario en el contenido del párrafo
            div.appendChild(pe);  // Añadimos el párrafo al div
        });
    } else {
        // Si no hay datos, mostramos un mensaje de error
        div.innerHTML = "<p>No se pudieron obtener los datos</p>";
    }
}

export default showData;  // Exportamos la función para poder utilizarla en otros archivos
