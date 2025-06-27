import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, FilterStatus, SortOption } from '../../types';
import { RootState } from '../../store';
import { v4 as uuidv4 } from 'uuid';

interface TodosState {
  items: Todo[];
  filter: FilterStatus;
  sort: SortOption;
}

const initialState: TodosState = {
  items: [
    { id: '1', text: 'Утверждение без подтверждения', completed: true },
    { id: '2', text: 'Утверждение с подтверждением', completed: true },
    { id: '3', text: 'Не утверждение', completed: false },
    { id: '4', text: 'Закрыть', completed: false },
  ],
  filter: 'all',
  sort: 'name',
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: uuidv4(),
        text: action.payload,
        completed: false,
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
    if (sort === 'status') {
      return Number(a.completed) - Number(b.completed);
    }
    return a.text.localeCompare(b.text);
  });
};

export const selectFilter = (state: RootState) => state.todos.filter;
export const selectSort = (state: RootState) => state.todos.sort;

export default todosSlice.reducer;