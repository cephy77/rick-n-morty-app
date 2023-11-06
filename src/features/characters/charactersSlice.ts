import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacters } from '../thunkActions/fetchCharacters';

interface InitialState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  characters: any[],
  totalPages: number,
  isLoading: boolean,
}

const initialState: InitialState = {
  characters: JSON.parse(sessionStorage.getItem('allCharacters') || '[]'),
  totalPages: 0,
  isLoading: false,
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
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

// export const {  } = charactersSlice.actions;
export default charactersSlice.reducer;