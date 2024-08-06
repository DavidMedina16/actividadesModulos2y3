// 1. importamos dependencias y modulos
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectionMongo } from './config/dataBase.js';
import userRouter from './routes/user.routes.js';
import adminRouter from './routes/admin.routes.js';
import longinRouter from './routes/login.routes.js';

// 2. Hacer las configuraciones
const app = express();
dotenv.config();
// cors -> middlewares -> intermediarios
app.use(cors());


const port = process.env.PORT ? process.env.PORT:6000;

// Ejecutar la base de datos
connectionMongo();

app.use(express.json());
app.use('/users', userRouter);
app.use('/admin', adminRouter);
app.use('/login', longinRouter);

// 3. Escuchar nuestro servidor para poder ejecutar el app
app.listen(port,()=>{
    console.log('El puerto se esta escuchando en: http://localhost:$ {port}')
});