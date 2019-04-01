import express from 'express';
import { ApolloServer } from 'apollo-server-express';
// import cors from 'cors';
import jwt from 'express-jwt';
import { secret } from './config/env';
import schema from './schema';

const PORT = 3001;
const app = express();
const path = '/api';
// const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:80'];

const authMiddleware = jwt({ secret, credentialsRequired: false });
// const corsMiddleware = cors({
//   origin: (origin, callback) => {
//     if (!origin) return callback(null, true);
//
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//
//       return callback(new Error(msg), false);
//     }
//
//     return callback(null, true);
//   },
// });

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
