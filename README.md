# bth_ramverk2 - react_Express_backend

[![Build Status](https://travis-ci.org/Zero2k/bth_ramverk2_backend.svg?branch=master)](https://travis-ci.org/Zero2k/bth_ramverk2_backend)
[![BCH compliance](https://bettercodehub.com/edge/badge/Zero2k/bth_ramverk2_backend?branch=master)](https://bettercodehub.com/)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Zero2k/bth_ramverk2_backend/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Zero2k/bth_ramverk2_backend/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/Zero2k/bth_ramverk2_backend/badges/build.png?b=master)](https://scrutinizer-ci.com/g/Zero2k/bth_ramverk2_backend/build-status/master)

## Dependencies

 * [node.js](https://nodejs.org/en/)
 * [mongodb](https://www.mongodb.com/)
 * [docker](https://docs.docker.com/engine/installation/)
 * [docker-compose](https://docs.docker.com/compose/install/)

## To start the app
```bash
- BACKEND
1. git clone https://github.com/Zero2k/bth_ramverk2_backend backend
2. cd backend
3. yarn - install dependencies
4. yarn start - start the backend (Make sure MongoDB is running)

- DOCKER
# Development
1. docker-compose up -d db
2. docker-compose up development
# Production
1. docker-compose up -d db
2. docker-compose up backend
```

## Further documentation

### About

All code in this repo is used to create my backend / server for my so called "Me-page" for the course Ramverk2 at Blekinge Institute of Technology. The server is built with Node.js, Express, GraphQL and MongoDB. 

### Frontend

See https://github.com/Zero2k/bth_ramverk2_frontend how to connect the fontend with the backend.

### Environment variables

To see all environment variables that's being used, open src/config/constants.js

**PORT**: process.env.PORT || process.env.DBWEBB_PORT: Set the port which the server will listen on.  
**DB_URL**: process.env.DB_URL || process.env.DBWEBB_DSN: Set the address which the server will use to create the database connection.

The easiest way to set the environment variables is by using the .env file in src/config/.env. Then source the file via the command 'source ./config/.env'

#### Default values

**PORT**: 8080,  
**DB_URL**: 'mongodb://localhost:27017',  
**GRAPHQL_PATH**: '/graphql',

Get access these values by importing constants.js and then use for example **constants.PORT** || **constants.DB_URL** || **constants.GRAPHGQ_PATH**

### Tests

```bash
TEST WITHOUT DOCKER

1. yarn start - This command will start the server in development mode.
2. yarn test - The command will run the tests located in /tests.
```

```bash
TEST WITH DOCKER (require docker)

1. yarn start:nodes - This command will start all node containers and the database.
OR
1. yarn start:db & start:node[7, 8, 9] - For example, if you want to start node7 then use start:node7.
2. yarn test:node[7, 8, 9] - For example, if you want to test node7 then use test:node7.
3. In order to turn off the containers use docker-compose down.
```
