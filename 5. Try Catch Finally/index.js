//divida dos números
const dividir = (a, b) => {
try {
if (b === 0) {
throw new Error("No se puede dividir por cero.");
}
return a / b;
} catch (error) {
return error.message;
 }
  };
  console.log(dividir(10, 2)); 
  console.log(dividir(8, 0)); 

//try y catch
  try {
    console.log(valorNoDefinido); 
  } catch (error) {
    console.log("Error capturado:", error.message);
  }
//desafio


try {
throw new Error("Algo salió mal");  
} catch (error) {
console.log("Se atrapó un error: " + error.message); 
} finally {
console.log("Este mensaje siempre se imprime."); 
}
