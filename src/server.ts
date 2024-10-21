import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './routes/userRouter';
import { corsConfig } from './config/cors';

const app = express();
app.use(morgan('dev')); 
app.use(cors(corsConfig)); // Enable CORS
app.use(express.json()); // Enable JSON body parsing

app.use('/game', userRouter);

export default app;