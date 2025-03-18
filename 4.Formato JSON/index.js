
// represente un libro
const libro = {
titulo: "El Principito",
autor: "Antoine de Saint-Exupéry",
año: 1943
};
const libroJSON = JSON.stringify(libro);
console.log(libroJSON);

// conviértelo a objeto 
const jsonString = '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}';
const persona = JSON.parse(jsonString);
console.log(persona.edad);

//lista
const lista = '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]';

// Convertir JSON a un array de objetos
const productos = JSON.parse(lista);

// Listar los productos
productos.forEach(item => console.log(item.producto));





