import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todosSlice';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <button 
        className="delete-button"
        onClick={() => dispatch(removeTodo(todo.id))}
        aria-label="Удалить задачу"
      />
    </div>
  );
};

export default TodoItem;