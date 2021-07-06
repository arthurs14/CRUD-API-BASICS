import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: "Jisoo",
    lastName: "Kim",
    age: 26
  },
  {
    firstName: "Jennie",
    lastName: "Kim",
    age: 25
  },
];

router.get('/', (req, res) => {
  res.send(users);
});

router.post('/', (req, res) => {
  const user = req.body;

  users.push(user);

  res.send(`User with the name ${user.firstName} added to the databsae`);
});

export default router;