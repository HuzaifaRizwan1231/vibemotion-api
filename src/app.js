import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.ORIGIN
}));

app.use(express.json());
app.use('/contact', contactRoutes);

export default app;
