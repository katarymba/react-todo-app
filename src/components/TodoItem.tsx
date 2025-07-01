import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todoSlice';
import { Todo } from '../types';

function TrashIcon() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
      <rect x="9" y="10" width="1.5" height="5" rx="0.75" fill="#83899F"/>
      <rect x="12" y="10" width="1.5" height="5" rx="0.75" fill="#83899F"/>
      <rect x="4" y="6" width="14" height="1.5" rx="0.75" fill="#83899F"/>
      <rect x="6" y="7" width="10" height="10" rx="2" stroke="#83899F" strokeWidth="1.5"/>
      <rect x="8.5" y="2.5" width="5" height="2" rx="1" fill="#83899F"/>
    </svg>
  );
}

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
        aria-label="Удалить"
      >
        <TrashIcon />
      </button>
    </div>
  );
};

export default TodoItem;