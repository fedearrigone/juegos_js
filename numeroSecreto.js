function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

// Ejecución Principal
const nroSecreto = generarNumeroSecreto();
console.log({ nroSecreto });
let intentos = 0;
//let limite = 4
do {
  var nroAdivinado = parseInt(prompt("Adivina el Nro Secreto"));
  console.log({ nroAdivinado });
  intentos++;
  if (nroSecreto > nroAdivinado) {
    alert("El número secreto es mayor");
  } else if (nroSecreto < nroAdivinado) {
    alert("El número secreto es menor");
  }
  /* if(intentos===limite){
    alert("Perdiste!")
    break;
  } */
} while (nroAdivinado !== nroSecreto);
alert(`Ganaste en ${intentos} intentos`);
