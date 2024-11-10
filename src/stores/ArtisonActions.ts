import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Artisons,Artison } from '../types/Artison';

export const fetchArtison = createAsyncThunk<Artisons, void, { rejectValue: string }>(
    'Artison',
    async (_, { rejectWithValue }) => {
      try {
       
  
        const { data } = await axios.get<{ result: Artisons }>(
          `${process.env.API_URL}/artison`,
         
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

  export const fetchArtisonById = createAsyncThunk<Artison, string, { rejectValue: string }>(
    'artison/fetchById',
    async (id, { rejectWithValue }) => {
      try {
        const { data } = await axios.get<{ result: Artison }>(`${process.env.API_URL}/artison/${id}`);
      
        return data.result;
      } catch (error: any) {
        if (error.response && error.response.data.msg) {
          return rejectWithValue(error.response.data.msg);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );