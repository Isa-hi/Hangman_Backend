import { Router } from "express";
import { GameController } from "../controllers/game";

const router = Router();

router.get("/start-game", (req, res) => {
  console.log("Levantando server... Espera un momento ⏳")
  setTimeout(() => {
    console.log("La conexión está lista ✅ \n");
    GameController.startGame(req, res)
  }, 2000)
});

router.get("/lose-life", 
  GameController.loseLife
);

router.get("/game-over", 
  GameController.gameOver
);

router.get("/game-won", 
  GameController.gameWon
);

export default router;
