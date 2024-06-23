// importaciones
import { productModel } from '../models/products.model.js';

// prueba inicial de mis controladores

// Peticion GET -> me muestra los productos
export const getProducts = async(req, res) => {
    return res.send('Funciona la peticion GET');
}

// Peticion POST -> me crea productos
export const postProducts = async(req, res) => {
    return res.send('Funciona la peticion POST');
}

// Peticion DELETE -> me elimina los productos por id
export const deleteProductById = async(req, res) => {
    return res.send('Funciona la peticion DELETE');
}

// Peticion PUT -> me actualiza los productos por id
export const putProductById = async(req, res) => {
    return res.send('Funciona la peticion PUT');
}