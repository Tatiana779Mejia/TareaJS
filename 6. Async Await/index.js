//esperarSegundos
function esperarSegundos(segundos) {
    return new Promise(esperar => setTimeout(esperar, segundos * 1000));
    }
    async function mostrarSegundos() {
    console.log("Inicio ");
    await esperarSegundos(5);
    console.log("Primer mensaje después de 5 segundos")
    await esperarSegundos(7);
    console.log("Segundo mensaje después de 7 segundos")
    await esperarSegundos(4);
    console.log("Tercer mensaje después de 4 segundos mas")
    console.log("Fin de mensajería")
    }
    console.log("Segundos antes del inicio")
    mostrarSegundos();
    console.log("Segundos después de llamar la función")