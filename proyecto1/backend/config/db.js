// 1. importar dependencias necesarias
import mongoose from 'mongoose';

const connectionMongo = async() => {
    await mongoose.connect(process.env.CONEXION_DB,{})  // Conexion a base de datos
    // Control de errores -> try -catch
    try{
        console.log('Conexion exitosa con la base de datos');
    } catch(error){
        console.error('Error de conexion', error.message)
    }
}

export default connectionMongo;