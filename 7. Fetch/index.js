function obtenerUsuarios() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json()) 
        .then(data => {
            const lista = document.getElementById("listaUsuarios");
            lista.innerHTML = ""; 

            data.forEach(user => {
                const li = document.createElement("li");
                li.textContent = user.name; 
                lista.appendChild(li);
            });
        })
        .catch(error => console.error("Error al obtener los datos:", error));
}