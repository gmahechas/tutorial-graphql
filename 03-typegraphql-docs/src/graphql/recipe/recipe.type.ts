import { ObjectType, Field, ID } from 'type-graphql';
import { MaxLength, Length, ArrayMaxSize } from 'class-validator';

@ObjectType()
export class RecipeType {
  @Field(() => ID) id: string;
  @Field() @MaxLength(30) title: string;
  @Field({ nullable: true }) @Length(4, 255) description?: string;
  @Field() creationDate: string;
  @Field(type => [String]) @ArrayMaxSize(30) ingredients: string[];
}