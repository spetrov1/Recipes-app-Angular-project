import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";


export class RecipesService {
    
    private recipes = [
        new Recipe("Musaka", 
          "Very good Musaka", 
          "data:image/jpeg;base64,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",
          [
              new Ingredient("Кайма", 100),
              new Ingredient("Картофи", 150)
          ])
      ,
      new Recipe("Bob", "Very good Bob", "https://upload.wikimedia.org/wikipedia/commons/9/97/Ready_kurban_chorba.JPG",
      [
        new Ingredient("Бобови зърна", 100),
        new Ingredient("Лук", 50)
      ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
      return this.recipes.slice()[index];
    }

}