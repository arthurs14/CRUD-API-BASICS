import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
  {
    firstName: "Jisoo",
    lastName: "Kim",
    age: 26,
    id: uuidv4(),
  },
  {
    firstName: "Jennie",
    lastName: "Kim",
    age: 25,
    id: uuidv4(),
  }
];

// gets users
router.get('/', (req, res) => {
  res.send(users);
});

// creates new user
router.post('/', (req, res) => {
  const user = req.body;
  
  const userWithId = { ...user, id: uuidv4() };

  users.push(userWithId);

  res.send(`User with the name ${userWithId.firstName} added to the databsae`);
});

// gets user with id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundUser = users.find(user => id === user.id);

  res.send(foundUser);
});

// delete user with id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const existingUsers = users.filter(user => user.id !== id); 

  users = [ ...existingUsers ];

  res.send(`User with id ${id} deleted from database.`);
});

// update user data
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  
});

export default router;