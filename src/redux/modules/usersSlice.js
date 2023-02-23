import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginInstance } from '../../axios/api';
// import axios from 'axios';

export const __addUser = createAsyncThunk(
  'users/addUser',
  async (newUser, thunkAPI) => {
    try {
      const response = await loginInstance.post('/', newUser);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const initialState = {
    users: [],
  };

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(__addUser.fulfilled, (state, action) => {
          state.users.push(action.payload);
        })
        .addCase(__addUser.rejected, (state, action) => {
          console.error('회원가입 실패', action.payload);
          // handle the error here, e.g. display a message to the user
        });
    },
    
  });

  export default usersSlice.reducer