import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  private API = '//localhost:8080/tmall_springboot';
  private ingredientAPI = this.API + '/ingredient';

  constructor(private http: HttpClient,
              private slService: ShoppingListService,
              private recipeService: RecipeService) {
  }

  storeIngredient() {
    const ingredients = this.slService.getIngredients();
    this.http
      .put(this.ingredientAPI, ingredients)
      .subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
