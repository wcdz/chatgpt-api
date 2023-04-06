import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import gptRoutes from './routes/gpt.routes.js';


// Inicializacion de express
const app = express();

// Settings
config();
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(cors()); // Permite el consumo de recursos desde otros dominios, puertos o protocolos
app.use(express.json());

// Routes
app.use('/api/gpt', gptRoutes);

export default app;