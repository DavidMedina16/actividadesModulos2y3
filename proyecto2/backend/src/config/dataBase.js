// 1. Importaciones
import mongoose from 'mongoose';

// funcion flecha -> se le llama (callback) cuando no se devuelve nada 
// const variable = async () => {} esta es un manera de hacerlo

// funcion declarativa
export async function connectionMongo (){
    
    try{
        await mongoose.connect(process.env.URL_DATABASE,{})
        console.log('Conecxion exitosa con la base de datos');
    }catch(error){
        console.error('Error de conexion: ', error);

    }
}
