import express from 'express';
import { createServer } from 'http';
import path from 'path';

import constants from './config/constants';
import middlewares from './config/middlewares';
import socket from './config/socket';

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../frontend/build')));
  app.use('*', express.static(path.join(__dirname, '../../frontend/build')));
}

const server = createServer(app);
middlewares(app);
socket(server);

server.listen(constants.PORT, (err) => {
  if (err) {
    console.error(err);
  }

  console.log('Server listen to port:', constants.PORT);
});
