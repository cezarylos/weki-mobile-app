import { AxiosPromise } from 'axios';

import { apiInstance } from './api.service';
import { CategoryResponseInterface, RecipeResponseInterface } from './recipes.service.interface';

class RecipesService {
  static getRecommendedRecipes(): AxiosPromise<{ data: RecipeResponseInterface[] }> {
    return apiInstance.get('/recipes?filters[isRecommended][$eq]=true&populate[0]=cover');
  }

  static getCategories(): AxiosPromise<{ data: CategoryResponseInterface[] }> {
    return apiInstance.get('/categories?populate[0]=cover');
  }

  static updateLikedRecipes(userId: number, likedRecipesIds: number[]): AxiosPromise {
    return apiInstance.put(`/users/${userId}`, { likedRecipes: likedRecipesIds });
  }
}

export default RecipesService;
