/* eslint-disable no-console */
// the above line ignores console styling
import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { createServer } from 'http';
import bodyParser from 'body-parser';

// this runs the code in db but doesn't import any value
import './config/db';
import config from './config/config';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import mocks from './mocks';


const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// these are middlewares 
app.use(bodyParser.json());

// this sets the url to access graphql console 
app.use('/graphiql', graphiqlExpress({
  endpointURL: config.GRAPHQL_PATH
}));

// route the schema to graphql console
app.use(config.GRAPHQL_PATH, graphqlExpress({
  schema
}));

const graphqlServer = createServer(app);
mocks().then(() => {
  graphqlServer.listen(config.PORT, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`App listen to port: ${config.PORT}`);
    }
  });
});

