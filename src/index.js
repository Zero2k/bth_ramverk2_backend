import express from 'express';
import { createServer } from 'http';
import path from 'path';

import constants from './config/constants';
import middlewares from './config/middlewares';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.get('/', (req, res) => {
    res.status(200).send('Hello World');
  });
}

middlewares(app);

/* 
  This part is being used in production by serving the build folder from React. In order to get started use 'git clone https://github.com/Zero2k/bth_ramverk2_frontend frontend' then 'cd frontend' and use 'yarn build' to bundle and minimize the frontend. (You must have the backend and frontend folder at the same location / folder)
*/
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../frontend/build')));
  app.use('*', express.static(path.join(__dirname, '../../frontend/build')));
}

const grahpQLServer = createServer(app);

grahpQLServer.listen(constants.PORT, err => {
  if (err) {
    console.error(err);
  }

  console.log(`Server listen to port:`, constants.PORT);
});
