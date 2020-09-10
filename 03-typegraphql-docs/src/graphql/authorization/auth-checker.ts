import { AuthChecker } from 'type-graphql';
import { MyContext } from './my-context.interface';

export const customAuthChecker: AuthChecker<MyContext> = ({ root, args, context, info }, roles) => {
  console.log('Root:::', root);
  console.log('Args:::', args);
  console.log('Context:::', context);
  console.log('Info:::', info);
  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]

  return true; // or false if access is denied
};