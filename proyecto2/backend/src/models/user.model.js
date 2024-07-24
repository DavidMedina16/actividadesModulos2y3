// Importacion de dependecias y modulos
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombreCompleto: {
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true,
        unique: true
    },
    contrasena:{
        type: String,
        required: true,
    },
    imagen:{
        type: String
    }
});

export const userModel = new mongoose.model('usuario', userSchema);