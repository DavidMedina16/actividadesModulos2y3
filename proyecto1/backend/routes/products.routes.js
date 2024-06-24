// importaciones

import express from 'express';
import { getProducts, postProducts, deleteProductById, putProductById } from '../controllers/products.controllers.js';

// Configuramos el router de express
const productsRouter = express.Router();

// Definimos nuestras rutas

// Ruta para la peticion GET
productsRouter.get('/obtenerProductos',getProducts);

// Ruta para la peticion POST
productsRouter.post('/registrarProducto',postProducts);

// Ruta para la peticion DELETE
productsRouter.delete('/eliminarProducto/:_id',deleteProductById);

// Ruta para la peticion PUT
productsRouter.put('actualizarProducto/:_id',putProductById);

// Exportamos las rutas
export default productsRouter;