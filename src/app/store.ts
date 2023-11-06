import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from '../features/characters/charactersSlice';
import characterSlice from '../features/characters/characterSlice';

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    character: characterSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;