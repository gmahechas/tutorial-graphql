import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';

import { RecipeResolver } from './recipe/recipe.resolver';
import { MyResolver } from './authorization/my-resolver';
import { customAuthChecker } from './authorization/auth-checker';

const createSchema = buildSchema({
  resolvers: [/* RecipeResolver,  */MyResolver],
  authChecker: customAuthChecker
});

export const graphqlServer = async () => new ApolloServer({
  schema: await createSchema,
  playground: true
});


