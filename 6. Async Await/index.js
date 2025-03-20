//esperarSegundos
function esperarSegundos(segundos) {
return new Promise(esperar => setTimeout(esperar, segundos * 1000));
}
async function mostrarMensajes() {
console.log("Inicio de la mensajería");
await esperarSegundos(3);
console.log("Primer mensaje después de 3 segundos")
await esperarSegundos(6);
console.log("Segundo mensaje después de 6 segundos")
await esperarSegundos(2);
console.log("Tercer mensaje después de 2 segundos mas")
console.log("Fin de la mensajería")
}
console.log("Mensaje antes del INICIO")
mostrarMensajes();
console.log("Mensaje después de llamar la función")