import users from '../data/users.js';

export const getUsers = (req, res) => {
    res.send(users);
};

export const getUserById = (req, res) => {
  const { id } = req.params;

  const userFound = users.find(user => user.id === id);

  res.send(userFound);
};