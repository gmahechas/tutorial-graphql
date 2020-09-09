import { buildSchema } from 'type-graphql';
import { LoginResolver } from '../module/user/Login';
import { LogoutResolver } from '../module/user/Logout';
import { MeResolver } from '../module/user/Me';
import { RegisterResolver } from '../module/user/Register';

export const createSchema = () => buildSchema({
    resolvers: [
      LoginResolver,
      LogoutResolver,
      MeResolver,
      RegisterResolver
    ],
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId;
    }
  });