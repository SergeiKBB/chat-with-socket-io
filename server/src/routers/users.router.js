import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser
} from "../controllers/users.controller";

const usersRouter = Router();

usersRouter
  .get('/', getAllUsers)
  .get('/:id', getUserById)
  .post('/', createUser)
  .put('/:id', updateUser)
  .delete('/:id', deleteUser);

export default usersRouter
