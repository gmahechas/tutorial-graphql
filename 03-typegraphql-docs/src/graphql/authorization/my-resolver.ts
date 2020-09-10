import { Resolver, Query, Authorized, Mutation } from 'type-graphql';
import { MyObject } from './my-object';

@Resolver()
export class MyResolver {
  @Query()
  publicQuery(): MyObject {
    return {
      publicField: "Some public data",
      authorizedField: "Data for logged users only",
      adminField: "Top secret info for admin",
    };
  }

  @Authorized()
  @Query()
  authedQuery(): string {
    return "Authorized users only!";
  }

  @Authorized("ADMIN", "MODERATOR")
  @Mutation()
  adminMutation(): string {
    return "You are an admin/moderator, you can safely drop the database ;)";
  }
}