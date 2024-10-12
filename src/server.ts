import express from 'express';
//import cors from 'cors';
import morgan from 'morgan';
import userRouter from './routes/userRouter';
import { GameController } from "./controllers/game";
//import { corsConfig } from './config/cors';

const app = express();
app.use(morgan('dev')); // Enable logging of HTTP requests
app.use(express.json()); // Enable JSON body parsing
//app.use(cors(corsConfig)); // Enable CORS

app.use('/user', userRouter);

export default app;

// Muestra mensaje cuando se inicializa el server y cuando está lista la conexión
console.log("Levantando server... Espera un momento ⏳");
setTimeout(() => {
  console.log('La conexión está lista ✅ \n');
  GameController.startGame();
}, 2000);
