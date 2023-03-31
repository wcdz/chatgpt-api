import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

console.log('Server Ok');

app.use('gpt', require('./routes'));