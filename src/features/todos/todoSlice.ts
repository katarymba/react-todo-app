import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../store';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export type FilterStatus = 'all' | 'active' | 'completed';
export type SortOption = 'name' | 'status' | 'created';

interface TodosState {
  items: Todo[];
  filter: FilterStatus;
  sort: SortOption;
}

const now = Date.now();
const initialState: TodosState = {
  items: [
    { id: '1', text: 'Утверждение без подтверждения', completed: true, createdAt: now - 30000 },
    { id: '2', text: 'Утверждение с подтверждением', completed: true, createdAt: now - 20000 },
    { id: '3', text: 'Не утверждение', completed: false, createdAt: now - 10000 },
    { id: '4', text: 'Закрыть', completed: false, createdAt: now },
  ],
  filter: 'all',
  sort: 'created',
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.unshift({
        id: uuidv4(),
        text: action.payload,
        completed: false,
        createdAt: Date.now(),
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<FilterStatus>) => {
      state.filter = action.payload;
    },
    setSort: (state, action: PayloadAction<SortOption>) => {
      state.sort = action.payload;
    },
  }
});

export const { addTodo, toggleTodo, removeTodo, setFilter, setSort } = todosSlice.actions;

export const selectFilteredSortedTodos = (state: RootState) => {
  const { items, filter, sort } = state.todos;
  let filteredItems = items;
  if (filter === 'active') {
    filteredItems = items.filter(todo => !todo.completed);
  } else if (filter === 'completed') {
    filteredItems = items.filter(todo => todo.completed);
  }
  return [...filteredItems].sort((a, b) => {
    if (sort === 'status' || sort === 'created') {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      return b.createdAt - a.createdAt;
    }
    return a.text.localeCompare(b.text);
  });
};

export const selectFilter = (state: RootState) => state.todos.filter;
export const selectSort = (state: RootState) => state.todos.sort;

export default todosSlice.reducer;