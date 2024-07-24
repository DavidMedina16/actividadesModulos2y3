// Importacion dependencias y modulos// Importacion de dependecias y modulos
import mongoose from 'mongoose';
import { userModel } from './user.model.js';

const adminSchema = new mongoose.Schema({
    categoriaAdmin: {
        type: Boolean,
        required: true,
        default: true
    }
});

// mongoose -> metodo 'discriminator' -> nos permite crear un modelo de administrador a partir de otro modelo, User

export const adminModel = userModel.discriminator('Admin', adminSchema);