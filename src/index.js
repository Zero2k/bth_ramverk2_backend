import express from 'express';
import { createServer } from 'http';
import path from 'path';

import contants from './config/constants';
import middlewares from './config/middlewares';


const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

middlewares(app);

/* 
This part could be used in production. Just remove the commented lines below and remove the app.get function above. Then git clone https://github.com/Zero2k/bth_ramverk2_frontend and cd bth_ramverk2_frontend and use 'yarn build' to bundle and minimize the frontend. Once it's done, start up the server / backend with 'yarn start' and visit http://localhost:8080
*/
// app.use(express.static(path.join(__dirname, '../../frontend/build')));
// app.use('*', express.static(path.join(__dirname, '../../frontend/build')));

const grahpQLServer = createServer(app);

grahpQLServer.listen(contants.PORT, err => {
  if (err) {
    console.error(err);
  }

  console.log(`Server listen to port:`, contants.PORT);
});
