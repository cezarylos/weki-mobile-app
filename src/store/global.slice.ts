import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slices } from '../enums/slices';
import { Languages } from '../enums/languages.enum';
import { AppState } from './store';

type SliceState = {
  language: Languages;
};

const initialState = {
  language: Languages.plPL
} as SliceState;

export const globalSlice = createSlice({
  name: Slices.GLOBAL,
  initialState,
  reducers: {
    setLanguage: (state: SliceState, { payload }: PayloadAction<Languages>): void => {
      state.language = payload;
    }
  }
})

export const { setLanguage } = globalSlice.actions;

export const selectLanguage = (state: AppState) => state.global.language;


export default globalSlice.reducer
