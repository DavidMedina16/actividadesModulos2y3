// 1. importamos las dependencias y modulos que necesitamos
import express from 'express';
import dotenv from 'dotenv';
import connectionMongo from './config/db.js';
import productsRouter from './routes/products.routes.js';
// Variables de entorno -> nos guardan informacion delicada

// 2. Configurar el uso de nuestro servidor y de nuestras variables de entorno

const app = express(); // configuramos nuestro servidor
dotenv.config(); // configuramos nuestras variables
const port = process.env.PORT;

// Conecteme a la base de datos
connectionMongo();
// Usamos las rutas
app.use('/', productsRouter);

//Prueba
// app.get('/',(req, res)=>{
//     res.send('HOLA, ESTOY PROBANDO ESTO');
// });

// 3. Escuchar nuestro servidor (ejecutarlo) 
app.listen(port, ()=>{
    console.log(`El servidor se esta escuchando en : http://localhost:${port}`);
});