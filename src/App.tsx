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
    </Provider>
  );
};

export default App;