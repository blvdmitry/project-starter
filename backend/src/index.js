import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import jwt from 'express-jwt';
import schema from './schema';
import mocks from './mocks';

require('dotenv').config();

const PORT = 3001;
const app = express();
const path = '/api';

const authMiddleware = jwt({ secret: process.env.JWT_SECRET, credentialsRequired: false });

const apolloServer = new ApolloServer({
  ...schema,
  context: ({ req }) => ({ token: req.user }),
  mocks,
});

app.use(path, authMiddleware);
apolloServer.applyMiddleware({ app, path });

app.listen(PORT, () => {
  // eslint-ignore-next-line
  console.log(`Server is running on http://localhost:${PORT}/api`);
});
