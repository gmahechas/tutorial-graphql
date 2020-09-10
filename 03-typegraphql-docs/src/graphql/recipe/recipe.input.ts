import { InputType, Field } from 'type-graphql';

@InputType()
export class NewRecipeInput {
  @Field() title: string;
  @Field({ nullable: true }) description?: string;
  @Field() creationDate: string;
  @Field(() => [String]) ingredients: string[];
}
