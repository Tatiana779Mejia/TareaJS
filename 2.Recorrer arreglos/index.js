//suma
const numeros = [3, 7, 2, 9, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
suma += numeros[i];
}

console.log("La suma es:", suma);
//número mayor 
const num = [12, 45, 6, 89, 23];
const mayor = Math.max(num);

console.log("El número mayor es:", mayor);

// números menores a 10 

const numer = [15, 3, 8, 12, 1];
const menoresA10 = numer.filter(num => num < 10);

console.log("Números menores a 10:", menoresA10);