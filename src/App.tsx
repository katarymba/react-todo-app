import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import TodoSort from './components/TodoSort';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Список задач</h1>
        <AddTodo />
        <div className="controls">
          <TodoFilter />
          <TodoSort />
        </div>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;