import express from 'express';
import { 
  getUsers,
  createUser,
  getUserById,
  deleteUser, 
  updateUser
} from '../controllers/users.js'

const router = express.Router();

// gets users
router.get('/', getUsers);

// creates new user
router.post('/', createUser);

// gets user with id
router.get('/:id', getUserById);

// delete user with id
router.delete('/:id', deleteUser);

// update user data
router.patch('/:id', updateUser);

export default router;