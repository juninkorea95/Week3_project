import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../axios/api';

const SERVER_URL = process.env.REACT_APP_SERVER_URL; 

// todo 추가 (개별 todo 조회도 이 함수를 이용함)
export const __addTodo = createAsyncThunk(
  'todos/addTodo', 
  async (newTodo) => {
    await api.post(`${SERVER_URL}/todos`, newTodo); 
    return newTodo;
  }
);

// 전체 todo 리스트 조회 
export const __fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const { data } = await api.get(`${SERVER_URL}/todos`); 
    return data;
  }
);

// todo 삭제
export const __deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id) => {
    await api.delete(`${SERVER_URL}/todos/${id}`); 
    return id;
  }
);

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
      })
      .addCase(__fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(__deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
