import { createSlice } from '@reduxjs/toolkit';

import { fetchClient } from './ClientActions';

const initialState = {
    Clients: [],
    loading: false,
    Client: {},
    error: null,
    success: false,
  };



  const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchClient.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchClient.fulfilled, (state, action) => {
        state.loading = false;
        state.Clients = action.payload;
        state.success = true;
      });
      builder.addCase(fetchClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  
   
    },
  });


  export default clientSlice.reducer;