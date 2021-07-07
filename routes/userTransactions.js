import express from 'express';
import { getUsers, getUserById } from '../controllers/userTransactions.js';

const router = express.Router();

// get users
router.get('/', getUsers);

// get user with id
router.get('/:id', getUserById);

export default router;