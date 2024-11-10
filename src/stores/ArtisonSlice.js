import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

import { fetchArtison, fetchArtisonById } from './ArtisonActions';

const initialState = {
  Artisons: [],
  loading: false,
  Artison: {},
  error: null,
  success: false,
};
const artisonSlice = createSlice({
  name: 'artison',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArtison.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchArtison.fulfilled, (state, action) => {
      state.loading = false;
      state.Artisons = action.payload;
      state.success = true;
    });
    builder.addCase(fetchArtison.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //fetch BY ID

    builder.addCase(fetchArtisonById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchArtisonById.fulfilled, (state, action) => {
      state.loading = false;
      state.Artison = action.payload;
      state.success = true;
    });
    builder.addCase(fetchArtisonById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default artisonSlice.reducer;
