import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSort, selectSort } from '../features/todos/todosSlice';
import { SortOption } from '../types';

const TodoSort: React.FC = () => {
  const dispatch = useDispatch();
  const currentSort = useSelector(selectSort);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(e.target.value as SortOption));
  };

  return (
    <div className="todo-sort">
      <span>Сортировка:</span>
      <select value={currentSort} onChange={handleSortChange}>
        <option value="name">Наименование</option>
        <option value="status">Статус</option>
      </select>
    </div>
  );
};

export default TodoSort;