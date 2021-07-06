import express from 'express';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Homepage');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

