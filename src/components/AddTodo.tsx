import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(
        addTodo({
          userId: 1,
          id: Date.now(),
          title: title.trim(),
          completed: false,
        })
      );
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Новая задача"
        className="add-todo-input"
      />
      <button type="submit" className="add-todo-button">
        Добавить
      </button>
    </form>
  );
};

export default AddTodo;