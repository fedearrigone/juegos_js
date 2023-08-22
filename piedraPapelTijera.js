function generarJugadaCompu() {
  return parseInt(Math.random() * 3);
}
// 0:piedra, 1:papel, 2:tijera
const valores = ["piedra", "papel", "tijera"];
const jugadaCompu = valores[generarJugadaCompu()];
console.log({ jugadaCompu });

do {
  var jugadaUsuario = prompt("Ingrese: piedra, papel o tijera").toLowerCase();
  if (!valores.includes(jugadaUsuario)) {
    alert("Ingrese un dato valido");
  }
} while (!valores.includes(jugadaUsuario));

if (jugadaCompu == jugadaUsuario) {
  alert("Empate");
} else {
  var ganador = null;
  switch (jugadaCompu) {
    case "piedra":
      // ganador = (jugadaUsuario === "papel") ? "usuario" : "computadora";
      if (jugadaUsuario === "papel") {
        ganador = "usuario";
      } else {
        ganador = "computadora";
      }
      break;
    case "papel":
      if (jugadaUsuario === "tijera") {
        ganador = "usuario";
      } else {
        ganador = "computadora";
      }
      break;
    case "tijera":
      if (jugadaUsuario === "piedra") {
        ganador = "usuario";
      } else {
        ganador = "computadora";
      }
      break;
  }
}

if (ganador) alert(`Ganador ${ganador}`);
