import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacter } from '../thunkActions/fetchCharacters';
import { CharacterInfo } from '../../types/Character';

interface InitialState {
  character: CharacterInfo | null,
  isLoading: boolean,
}

const initialState: InitialState = {
  character: null,
  isLoading: true,
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.character = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCharacter.rejected, (state) => {
        state.isLoading = false;
      })

  },
})

// export const {  } = charactersSlice.actions;
export default characterSlice.reducer;