import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import path from 'path';
import cors from 'cors';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, '../graphql/schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, '../graphql/resolvers')));

import constants from './constants';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default app => {
  app.use(cors('*'));
  app.use(bodyParser.json());
  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: constants.GRAPHQL_PATH,
    }),
  );

  app.use(
    constants.GRAPHQL_PATH,
    graphqlExpress(req => ({
      schema,
      context: {},
    })),
  );
};
