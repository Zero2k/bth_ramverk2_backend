import express from 'express';
import { createServer } from 'http';

import contants from './config/constants';
import middlewares from './config/middlewares';


const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

middlewares(app);

const grahpQLServer = createServer(app);

grahpQLServer.listen(contants.PORT, err => {
  if (err) {
    console.error(err);
  }

  console.log(`Server listen to port:`, contants.PORT);
});
