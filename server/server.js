import express from 'express';
import cors from 'cors';
import { 
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import { schema } from './src/schema';

const PORT = 4000;
const server = express();
server.use('*', cors({ origin: 'http://localhost:3000' }));
server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));