import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';
import { FetchParams } from '../../types/FetchParams';

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async (params: FetchParams) => {
  try {
    const response = await api.fetchCharacters(params)
    const characters = response.data.characters;

    return characters;
  } catch (e) {
    console.log(e);
  }
});

export const fetchCharacter = createAsyncThunk('character/fetchCharacter', async (id: number) => {
  try {
    const response = await api.fetchSingleCharacter(id)
    const character = response.data.character;

    return character;
  } catch (e) {
    console.log(e);
  }
});