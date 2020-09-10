import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { RecipeType } from './recipe.type';
import { NewRecipeInput } from './recipe.input';

import { recipes } from './data';

@Resolver(RecipeType)
export class RecipeResolver {

  @Query(() => [RecipeType])
  async getAllRecipes() {
    return recipes;
  }

  @Mutation(() => RecipeType)
  async createRecipe(@Arg("newRecipeData") newRecipeData: NewRecipeInput){
    const newRecipe = {id: '2', ...newRecipeData};
    recipes.push(newRecipe);
    return newRecipe;
  }
}