import { connectToArduino } from "../arduino/connectToArduino";
import { Response, Request } from "express";

// Crear una conexión con el Arduino
const { sendToArduino } = connectToArduino("COM7", 9600);

export class GameController {
  static startGame(req: Request, res: Response) {
    sendToArduino("Iniciar juego");
    res.json({ message: "Juego iniciado" });
  }

  static loseLife(req: Request, res: Response) {
    sendToArduino("Perder vida\n");
    res.json({ message: "Vida perdida" });
  }

  static gameOver(req: Request, res: Response) {
    sendToArduino("Perder juego\n");
    res.json({ message: "Juego perdido" });
  }

  static gameWon(req: Request, res: Response) {
    sendToArduino("Ganar juego\n");
    res.json({ message: "Juego ganado" });
  }
}