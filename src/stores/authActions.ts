import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Admin, LoginResponse, LoginCredentials } from '../types/admin';

export const AdminLogin = createAsyncThunk<Admin, LoginCredentials, { rejectValue: string }>(
  'auth/login',
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post<LoginResponse>(
        `${process.env.API_URL}/login`,
        { login, password },
        config,
      );

      localStorage.setItem('accessToken', data.accessToken);

      return data.admin;
    } catch (error: any) {
      if (error.response && error.response.data.msg) {
        return rejectWithValue(error.response.data.msg);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);


export const fetchAdminInfo = createAsyncThunk<Admin, void, { rejectValue: string }>(
  'auth/fetchAdminInfo',
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        throw new Error('No access token found');
      }

      const config = {
        headers: {
          Authorization: accessToken,
        },
      };

      const { data } = await axios.get<{ result: Admin }>(
        `${process.env.API_URL}/currentadmin`,
        config,
      );
      return data.result;
    } catch (error: any) {
      if (error.response && error.response.data.msg) {
        return rejectWithValue(error.response.data.msg);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
