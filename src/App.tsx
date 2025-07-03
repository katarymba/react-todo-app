import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import TodoSort from './components/TodoSort';
import './App.css';
import { setTodos } from './features/todos/todoSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/todos.json')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setTodos(data));
      })
      .catch((err) => {
        console.error('Ошибка загрузки данных:', err);
      });
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Список задач</h1>
      <AddTodo />
      <div className="todo-main-panel">
        <div className="todo-left-panel">
          <TodoList />
        </div>
        <div className="todo-right-panel">
          <TodoFilter />
          <TodoSort />
        </div>
      </div>
    </div>
  );
};

export default App;