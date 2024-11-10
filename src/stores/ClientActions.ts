import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Clients,Client } from '../types/Client';

export const fetchClient = createAsyncThunk<Clients, void, { rejectValue: string }>(
    'Client',
    async (_, { rejectWithValue }) => {
      try {
       
  
        const { data } = await axios.get<{ result: Clients }>(
          `${process.env.API_URL}/clients`,
         
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


 