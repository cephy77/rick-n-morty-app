import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacter } from '../thunkActions/fetchCharacters';

interface InitialState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  character: any,
  isLoading: boolean,
}

const initialState: InitialState = {
  character: null,
  isLoading: false,
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
        state.isLoading = false;
        state.character = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state) => {
        state.isLoading = false;
      })

  },
})

// export const {  } = charactersSlice.actions;
export default characterSlice.reducer;