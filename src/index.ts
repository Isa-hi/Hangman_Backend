import { connectToArduino } from "./arduino/connectToArduino";

// Crear una conexión con el Arduino
const { sendToArduino } = connectToArduino("COM6", 9600);

function startGame() {
  sendToArduino("Iniciar juego");
  // Todo: 
  // - Inicializar vidas
  // - Cargar palabra
}

function loseLife() {
  sendToArduino("Perder vida");
  // Todo:
  // - Implementar lógica para perder una vida
}

function winGame() {
  sendToArduino("Ganar juego");
  // Todo:
  // - Implementar lógica para ganar el juego
}

function restartGame() {
  sendToArduino("Reiniciar juego");
  // Todo:
  // - Implementar lógica para reiniciar el juego
}


// Muestra mensaje cuando se inicializa el server y cuando está lista la conexión
console.log("Levantando server... Espera un momento ⏳");
setTimeout(() => {
  console.log('La conexión está lista ✅ \n');
  startGame();
}, 2000);
