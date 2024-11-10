import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Albums,Album } from '../types/Album';

export const fetchAlbum = createAsyncThunk<Albums, void, { rejectValue: string }>(
    'Album',
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
        const { data } = await axios.get<{ result: Albums }>(
          `${process.env.API_URL}/abonnementAlbume`,
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

  export const fetchAlbumById = createAsyncThunk<Album, string, { rejectValue: string }>(
    'Album/fetchById',
    async (id, { rejectWithValue }) => {
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
        const { data } = await axios.get<{ result: Album }>(`${process.env.API_URL}/abonnementAlbume/${id}`, config,);
      
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