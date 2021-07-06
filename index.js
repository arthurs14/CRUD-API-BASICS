import express from 'express';

const app = express();
const PORT = 5000;

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from get route!');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

