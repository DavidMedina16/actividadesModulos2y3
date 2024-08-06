import { adminModel } from "../models/admin.model.js";
import bcrypt from 'bcryptjs';
// crear y mostrar todos y eliminar

// petición POST para crear administradores
export const postAdmin = async (request, response) => {
    try{

        const {nombreCompleto, correo, contrasena} = request.body;
        // voy a tomar la contraseña del cuerpo de mi peticón y la voy a encriptar
        // Yo le debo dar 1. contraseña del usuario
        // Salt Rounds -> nos define el nivel de encriptación -> # -> 10 -> nivel bueno de seguridad sin comprometer rendimiento
        const codedPassword = await bcrypt.hash(contrasena, 10);

        // Cree el administrador con la contraseña encriptada
        const newAdmin = await adminModel.create({
            nombreCompleto,
            correo,
            contrasena:codedPassword,
            categoriaAdmin: true
        })

        return response.status(201).json({
            estado: '201',
            mensaje: 'Administrador creado correctamente',
            datos: newAdmin
        })
    } catch(error){
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al crear un administrador',
            datos: error
        })
    }
}

// Mostrar todos los administradores
export const getAdmin = async (request, response) => {
    try{
        // -> encontrar -> find()
        const allAdmins = await adminModel.find();
        // validadr si no hay usuarios
        if(allAdmins.length === 0){
            return response.status(200).json({
                estado: '200',
                mensaje: 'No se encontraron administradores en la base de datos',
                datos: null
            })
        }

        return response.status(200).json({
            estado: '200',
            mensaje: 'Estos son todos los administradores encontrados',
            cantidadAdmins: allAdmins.length,
            admins: allAdmins
        })

    }catch(e){
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al buscar los administradores',
            datos: error
        })
    }
}

// Eliminar administradores
export const deleteAdminById = async (request, response) => {

    // TAREÍTA ELIMINAR ADMINISTRADORES
    return response.send('Funciona la petición DELETE de un admin');
}