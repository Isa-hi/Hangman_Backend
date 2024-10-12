import { connectToArduino } from "../arduino/connectToArduino";

// Crear una conexión con el Arduino
const { sendToArduino } = connectToArduino("COM6", 9600);

export class GameController {
    static startGame() {
        sendToArduino("Iniciar juego");
    }

    static loseLife() {
        sendToArduino("Perder vida");
    }

    static winGame() {
        sendToArduino("Ganar juego");
    }

    static restartGame() {
        sendToArduino("Reiniciar juego");
    }
}