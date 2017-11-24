import express from 'express';

const PORT = process.env.DBWEBB_PORT || '8080';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  }

  console.log(`Server listen to port:`, PORT);
});
