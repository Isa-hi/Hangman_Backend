import { connectToArduino } from "../arduino/connectToArduino";
import { Response } from "express";

// Crear una conexión con el Arduino
const { sendToArduino } = connectToArduino("COM5", 9600);

export class GameController {
  static startGame(res: Response) {
    sendToArduino("Iniciar juego\n");
    res.send("Juego iniciado");
  }

  static loseLife(res: Response) {
    sendToArduino("Perder vida\n");
    res.send("Vida perdida");
  }

  static gameOver(res: Response) {
    sendToArduino("Perder juego\n");
    res.send("Juego perdido");
  }

  static gameWon(res: Response) {
    sendToArduino("Ganar juego\n");
    res.send("Juego ganado");
  }
}
