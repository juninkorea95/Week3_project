import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//첫째인자는 이름, 둘째인자는 함수 
export const __addTodo = createAsyncThunk(
    'todos/addTodo', 
    async (newTodo) => {
    await axios.post('http://localhost:4000/todos', newTodo);
    return newTodo;
  });

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      });
  },
});

export default todosSlice.reducer;
