// express -> Router() -> permite crear las rutas -> endpoints
import {Router} from 'express';
import { getUserById, getUsers, postUser, putUserById, deleteUserById } from '../controllers/user.controllers.js';
import auth from '../middlewares/auth.js';

// También se puede trabajar de esta manera
// import controller from '../controllers/user.controller.js'
// controller.getUsers
// controller.getUserById
// controller.deleteUserById

const userRouter = Router();

// ruta para mostrar usuario por id
userRouter.get('/:id', auth(), getUserById);
// ruta para mostrar todos los usuarios
userRouter.get('/', auth(), getUsers);
// ruta para crear usuarios
userRouter.post('/', postUser);
// ruta para actualizar usuario por id
userRouter.put('/:id', auth('admin'), putUserById);
// ruta para eleiminar usuario por Id
userRouter.delete('/:id', auth('admin'), deleteUserById);

export default userRouter;