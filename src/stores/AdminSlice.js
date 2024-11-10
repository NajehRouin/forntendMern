import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { AdminLogin, fetchAdminInfo } from './authActions';

const initialState = {
  adminInfo: null,
  loading: false,
  accessToken: localStorage.getItem('accessToken') || null,
  error: null,
  success: false,
};
const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AdminLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(AdminLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.adminInfo = action.payload;
      state.accessToken = localStorage.getItem('accessToken');
      state.success = true;
    });
    builder.addCase(AdminLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchAdminInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAdminInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.adminInfo = action.payload;
      state.success = true;
    });
    builder.addCase(fetchAdminInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});



export default adminSlice.reducer;
