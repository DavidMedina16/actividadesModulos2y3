// 1. importamos dependencias y modulos
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// 2. Hacer las configuraciones
const app = express();
dotenv.config();
// cors -> middlewares -> intermediarios
app.use(cors());

// 3. Escuchar nuestro servidor para poder ejecutar el app
app.listen(port,()=>{
    console.log('El puerto se esta escuchando en: http://localhost:${6000}')
});