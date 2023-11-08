import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacters } from '../thunkActions/fetchCharacters';
import { Character } from '../../types/Character';

interface InitialState {
  characters: Character[],
  totalPages: number,
  isLoading: boolean,
  query: string,
}

const initialState: InitialState = {
  characters: JSON.parse(sessionStorage.getItem('allCharacters') || '[]'),
  totalPages: 0,
  isLoading: false,
  query: '',
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.characters = action.payload.results;
        state.totalPages = action.payload.info.pages
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.isLoading = false;
      })

  },
})

export const { setQuery } = charactersSlice.actions;
export default charactersSlice.reducer;