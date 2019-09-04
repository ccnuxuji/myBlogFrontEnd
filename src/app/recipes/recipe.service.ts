import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

Injectable();
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  recipe1: Recipe = new Recipe('A Test Recipe',
    'This is the first test!',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=15655858' +
    '57518&di=5a3327714a2d725eda52a7adb3e75e9a&imgtype=0&src=http%3A%2F%2Fimages.qudao.com%' +
    '2Fothers%2F2016-03-30%2F1459305432.jpg',
    [
      new Ingredient('fish', 1),
      new Ingredient('french fries', 1)
    ]);
  recipe2: Recipe = new Recipe('Another Recipe',
    'This is the second test!',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=156558697391' +
    '0&di=5a21ce9c2f63b17a51b02ec04b3a354b&imgtype=0&src=http%3A%2F%2Fnews.89178.com%2Fupload%2' +
    'Farticle%2F20180626%2F18416063311529983818.jpg',
    [
      new Ingredient('hamburger', 1)
    ]);

  private recipes: Recipe[] = [
    this.recipe1,
    this.recipe2
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addToIngredients(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
