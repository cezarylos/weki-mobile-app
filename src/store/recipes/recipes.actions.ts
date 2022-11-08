import { API_URL } from '@env';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Slices } from '../../enums/slices';
import { RecipeInterface } from '../../interfaces/recipe.interface';
import RecipesService from '../../services/recipes.service';
import { setUser } from '../global/global.slice';
import { AppState } from '../store';
import { CategoryInterface } from '../../interfaces/category.interface';

export const getRecommendedRecipes = createAsyncThunk(
  `${Slices.RECIPES}/getRecommendedRecipes`,
  async (): Promise<RecipeInterface[]> => {
    try {
      const { data: recipes } = (await RecipesService.getRecommendedRecipes()).data;
      return recipes.map(({ label, isRecommended, id, cover }) => ({
        label,
        isRecommended,
        id,
        coverUrl: `${API_URL}${cover?.url}`
      }));
    } catch (e) {
      throw e;
    }
  }
);

export const getCategories = createAsyncThunk(
  `${Slices.RECIPES}/getCategories`,
  async (): Promise<CategoryInterface[]> => {
    try {
      const { data: recipes } = (await RecipesService.getCategories()).data;
      return recipes.map(({ label, id, cover, categoryType }) => ({
        label,
        id,
        coverUrl: `${API_URL}${cover?.url}`,
        categoryType
      }));
    } catch (e) {
      throw e;
    }
  }
);

export const likeUnlikeRecipe = createAsyncThunk(
  `${Slices.RECIPES}/likeUnlikeRecipe`,
  async (recipeId: number, { dispatch, getState }): Promise<number[] | void> => {
    try {
      const state = getState() as AppState;
      const {
        global: { user },
        recipes: { recommendedRecipes }
      } = state;
      if (!user) {
        return;
      }
      let updatedLikedRecipes;
      const { likedRecipes, id: userId } = user;
      if (likedRecipes.includes(recipeId)) {
        updatedLikedRecipes = likedRecipes.filter(id => id !== recipeId);
      } else {
        updatedLikedRecipes = [...likedRecipes, recipeId];
      }
      const updatedUser = (await RecipesService.updateLikedRecipes(userId, updatedLikedRecipes)).data;
      dispatch(setUser(updatedUser));
    } catch (e) {
      throw e;
    }
  }
);
