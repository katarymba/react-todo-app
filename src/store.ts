// Импортируем функцию configureStore из Redux Toolkit для создания хранилища (store)
import { configureStore } from '@reduxjs/toolkit';
// Импортируем редьюсер для задач (todosReducer) из файла todoSlice
import todosReducer from './features/todos/todoSlice';

// Создаём store приложения с помощью configureStore
export const store = configureStore({
  // Передаём объект reducer, где указываем, что за состояние todos отвечает todosReducer
  reducer: {
    todos: todosReducer, // Ключ "todos" — часть общего состояния, значение — соответствующий редьюсер
  },
});

// Тип RootState автоматически определяет всю структуру состояния приложения на основе store
export type RootState = ReturnType<typeof store.getState>;
// Тип AppDispatch — это тип функции dispatch для типизации в хуках и компонентах
export type AppDispatch = typeof store.dispatch;