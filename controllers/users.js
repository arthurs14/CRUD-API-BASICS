import { v4 as uuidv4 } from 'uuid';

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

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  
  const userWithId = { ...user, id: uuidv4() };

  users.push(userWithId);

  res.send(`User with the name ${userWithId.firstName} added to the databsae`);
};

export const getUserById = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find(user => id === user.id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  let existingUsers = users.filter(user => user.id !== id); 

  users = [ ...existingUsers ];

  res.send(`User with id ${id} deleted from database.`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  let updateUser = users.find(user => id === user.id);

  if (firstName) updateUser.firstName = firstName;
  if (lastName) updateUser.lastName = lastName;
  if (age) updateUser.age = age;

  res.send(`User with the id ${id} has been updated!`);
};