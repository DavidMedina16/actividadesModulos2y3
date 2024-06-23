// importaciones
import mongoose from 'mongoose';

const schema = mongoose.Schema;

// Estructurando como se van a guardar la informacion de los productos en mi db
// El Schema es la plantilla
const productSchema = new schema({
    nombre:{
        type:String,
        require:true
    },
    imagen:{
        type:String
    },
    precio:{
        type:Number,
        require:true
    }
});

// Utilizamos  esa plantilla para crear nuestro modelo -> creamos la coleccion donde se van a guardar los datos
// mongoose.model crea nuestro modelo
// 1. nombre de la coleccion que me va a guardar los datos
// 2. necesitamos darle como parametro el schema que hicimos

export const productModel = mongoose.model('usuario',productSchema);
