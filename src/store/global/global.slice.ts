import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Languages } from '../../enums/languages.enum';
import { Slices } from '../../enums/slices';
import { AppState } from '../store';
import { getUser } from './global.actions';

type SliceState = {
  language: Languages;
  user: Record<string, any> | null;
  jwt: string;
};

const initialState = {
  language: Languages.plPL,
  user: null,
  jwt: ''
} as SliceState;

export const globalSlice = createSlice({
  name: Slices.GLOBAL,
  initialState,
  reducers: {
    setLanguage: (state: SliceState, { payload }: PayloadAction<Languages>): void => {
      state.language = payload;
    }
  },
  extraReducers: {
    [getUser.fulfilled.type]: (
      state: SliceState,
      { payload: { jwt, user } }: PayloadAction<{ jwt: string; user: any }>
    ): void => {
      state.user = user;
      state.jwt = jwt;
    }
  }
});

export const { setLanguage } = globalSlice.actions;

export const selectLanguage = (state: AppState) => state.global.language;
export const selectUser = (state: AppState) => state.global.user;
export const selectJWT = (state: AppState) => state.global.jwt;

export default globalSlice.reducer;
