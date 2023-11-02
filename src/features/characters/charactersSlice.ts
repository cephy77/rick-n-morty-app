import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {

});

const initialState = {
  characters: [],
  isLoading: false,
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {

  },
  // extraReducers(builder) {

  // },
})

// export const {  } = charactersSlice.actions;

export default charactersSlice.reducer;