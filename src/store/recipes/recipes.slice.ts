import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Slices } from '../../enums/slices';
import { RecipeInterface } from '../../interfaces/recipe.interface';
import { AppState } from '../store';
import { getCategories, getRecommendedRecipes } from './recipes.actions';
import { CategoryInterface } from '../../interfaces/category.interface';

type SliceState = {
  recommendedRecipes: RecipeInterface[];
  categories: CategoryInterface[];
};

const initialState = {
  recommendedRecipes: [],
  categories: []
} as SliceState;

export const recipesSlice = createSlice({
  name: Slices.RECIPES,
  initialState,
  reducers: {},
  extraReducers: {
    [getRecommendedRecipes.fulfilled.type]: (
      state: SliceState,
      { payload }: PayloadAction<CategoryInterface[]>
    ): void => {
      state.recommendedRecipes = payload;
    },
    [getCategories.fulfilled.type]: (state: SliceState, { payload }: PayloadAction<CategoryInterface[]>): void => {
      state.categories = payload;
    }
  }
});

export const selectRecommendedRecipes = (state: AppState) => state.recipes.recommendedRecipes;
export const selectCategories = (state: AppState) => state.recipes.categories;

export default recipesSlice.reducer;
