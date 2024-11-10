import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

import { fetchAlbum, fetchAlbumById } from './AlbumActions';

const initialState = {
    Albums: [],
  loading: false,
  Album: {},
  error: null,
  success: false,
};
const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbum.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAlbum.fulfilled, (state, action) => {
      state.loading = false;
      state.Albums = action.payload;
      state.success = true;
    });
    builder.addCase(fetchAlbum.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //fetch BY ID

    builder.addCase(fetchAlbumById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAlbumById.fulfilled, (state, action) => {
      state.loading = false;
      state.Album = action.payload;
      state.success = true;
    });
    builder.addCase(fetchAlbumById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default albumSlice.reducer;
