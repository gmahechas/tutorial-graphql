import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';
import session from 'express-session';
import connectRedis from 'connect-redis';

import { redis } from './redis';
import { createSchema } from './utils/createSchema';

const main = async () => {

  await createConnection();

  const schema = await createSchema();

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res })
  });

  const app = express();
  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000"
    })
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis as any
      }),
      name: "qid",
      secret: "aslkdfjoiq12312",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365 // 7 years
      }
    })
  );

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('Server starting on 4000 port')
  })
}

main();
