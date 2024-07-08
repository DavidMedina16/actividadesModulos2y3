// importaciones
import { productModel } from '../models/products.model.js';

// prueba inicial de mis controladores

// Peticion GET -> me muestra los productos
export const getProducts = async(req, res) => {

    // Manejo de errores -> se debe mostrar una respuesta ya sea que todo vaya bien o no

    try{
        let products = await productModel.find();

        // Validacion en el caso de que no hayan productos
        if(!products){
            return res.status(404).json({message: 'no se encontraron productos'});
        }

        return res.send(products);

    } catch(error){
        // 500 -> error inesperado en el servidor
        return res.status(500).json({message: 'Error del servidor' + error.message});
    }
}

// Peticion POST -> me crea productos
export const postProducts = async(req, res) => {
    const {nombre, imagen, precio} = req.body;
    // Validacion de que se haya ingresado todos los nombres
    if (!nombre || !imagen || !precio){
        return res.status(400).json({message: 'Debe imgresar todos los campos requeridos'});
    }

    try{
        const newProduct = await productModel.create(req.body);

        return res.status(201).json(newProduct);
    }catch(error){
        return res.status(500).json({message: 'Error del servidor' + error.message});
    }
}

// Peticion DELETE -> me elimina los productos por id
export const deleteProductById = async(req, res) => {
    return res.send('Funciona la peticion DELETE');
}

// Peticion PUT -> me actualiza los productos por id
export const putProductById = async(req, res) => {
    return res.send('Funciona la peticion PUT');
}