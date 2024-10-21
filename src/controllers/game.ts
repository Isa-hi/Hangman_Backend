import { connectToArduino } from "../arduino/connectToArduino";
import { Response, Request } from 'express';

// Crear una conexión con el Arduino
const { sendToArduino } = connectToArduino("COM5", 9600);

export class GameController {
    private static vidas: number;

    static startGame(req: Request, res: Response) {
        sendToArduino("Iniciar juego\n");
        GameController.vidas = 5;
        res.send("Juego iniciado");
    }

    static loseLife(req: Request, res: Response) {
        GameController.vidas--;
        if (GameController.vidas > 0) {
            sendToArduino("Perder vida\n");
            res.send("Vidas restantes: " + GameController.vidas);
        } else {
            GameController.gameOver(req, res);
        }
    }

    static gameOver(req: Request, res: Response) {
        sendToArduino("Perder juego\n");
        res.send("Juego perdido");
    }

    static gameWon(req: Request, res: Response) {
        sendToArduino("Reiniciar juego\n");
        res.send("Juego reiniciado");        
    }
}