import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

// Структура задачи
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Типы для фильтрации и сортировки
export type FilterStatus = 'all' | 'active' | 'completed';
export type SortOption = 'name' | 'status';

// Состояние задач
interface TodosState {
  items: Todo[];
  filter: FilterStatus;
  sort: SortOption;
}

const initialState: TodosState = {
  items: [],
  filter: 'all',
  sort: 'name',
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.items = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.items.unshift(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
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

export const { setTodos, addTodo, toggleTodo, removeTodo, setFilter, setSort } = todosSlice.actions;

// Селектор для фильтрации и сортировки задач
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
    // сортировка по алфавиту по title
    return a.title.localeCompare(b.title);
  });
};

export const selectFilter = (state: RootState) => state.todos.filter;
export const selectSort = (state: RootState) => state.todos.sort;

export default todosSlice.reducer;