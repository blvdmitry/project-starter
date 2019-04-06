import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import jwt from 'express-jwt';
import schema from './schema';

require('dotenv').config();

const PORT = 3001;
const app = express();
const path = '/api';

const authMiddleware = jwt({ secret: process.env.JWT_SECRET, credentialsRequired: false });

const apolloServer = new ApolloServer({
  ...schema,
  context: ({ req }) => ({ token: req.user }),
});

// app.use(corsMiddleware);
app.use(path, authMiddleware);
apolloServer.applyMiddleware({ app, path });

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}/api`);
});
