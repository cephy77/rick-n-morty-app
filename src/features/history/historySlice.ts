import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacter } from '../thunkActions/fetchCharacters';

interface InitialState {
  history: string[],
}

const initialState: InitialState = {
  history: JSON.parse(sessionStorage.getItem('actionHistory') || '[]'),
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory(state, action) {
      state.history = [...state.history, action.payload];
      sessionStorage.setItem('actionHistory', JSON.stringify(state.history));
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.history = [...state.history, `Reviewed info about ${action.payload.name}`];
        sessionStorage.setItem('actionHistory', JSON.stringify(state.history));
      })
  },
})

export const { addToHistory } = historySlice.actions;
export default historySlice.reducer;