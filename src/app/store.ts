import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from '../features/characters/charactersSlice';
import characterSlice from '../features/characters/characterSlice';
import historySlice from '../features/history/historySlice';

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    character: characterSlice,
    history: historySlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;