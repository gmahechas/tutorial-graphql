import { Resolver, Query, Mutation, Arg, UseMiddleware } from 'type-graphql';
import bcrypt from 'bcryptjs';

import { User } from '../../entity/User';
import { RegisterInput } from './register/RegisterInput';
import { isAuth } from '../middleware/isAuth';
import { logger } from '../middleware/logger';

@Resolver()
export class RegisterResolver {

  @UseMiddleware(isAuth, logger)
  @Query(() => String)
  async hello() {
    return "Hello World";
  }

  @Mutation(() => User)
  async register(
    @Arg('data') { firstName, lastName, email, password }: RegisterInput
  ): Promise<User> {

    const hashedPaswword = await bcrypt.hash(password, 12)
    return await User.create({
      firstName,
      lastName,
      email,
      password: hashedPaswword
    }).save();

  }
}