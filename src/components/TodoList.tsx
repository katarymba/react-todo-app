import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredSortedTodos } from '../features/todos/todoSlice';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todos = useSelector(selectFilteredSortedTodos);

  return (
    <div className="todo-list">
      <h2>Список задач</h2>
      {todos.length === 0 ? (
        <div className="todo-empty">Нет задач для отображения</div>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
};

export default TodoList;