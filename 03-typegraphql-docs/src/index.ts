import express from 'express';
import { graphqlServer } from './graphql';

const bootstrap = async () => {

  const app = express();
  await (await graphqlServer()).applyMiddleware({ app });
  app.listen(4000, () => console.log('Server starting on 4000 port'))

}

bootstrap();
