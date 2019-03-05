import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import jwt from 'express-jwt';
import { secret } from './config/env';
import schema from './schema';

const PORT = 3001;
const app = express();
const path = '/api';
const allowedOrigins = ['http://localhost:3000'];

const auth = jwt({ secret, credentialsRequired: false });
const corsConfig = {
  origin: (origin: any, callback: any) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `
        The CORS policy for this site does not
        allow access from the specified Origin.
      `;

      return callback(new Error(msg), false);
    }

    return callback(null, true);
  },
};
const apolloServer = new ApolloServer({
  schema,
  context: ({ req }: any) => ({ token: req.user }),
});

app.use(cors(corsConfig));
app.use(path, auth);
apolloServer.applyMiddleware({ app, path });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api`);
});
