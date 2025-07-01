import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSort, selectSort } from '../features/todos/todoSlice';
import { RootState } from '../store';
import { SortOption } from '../features/todos/todoSlice';

const TodoSort: React.FC = () => {
  const dispatch = useDispatch();
  const currentSort = useSelector((state: RootState) => selectSort(state));

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(e.target.value as SortOption));
  };

  return (
    <div className="todo-sort">
      <span>Сортировка:</span>
      <select value={currentSort} onChange={handleSortChange}>
        <option value="name">Наименование</option>
        <option value="status">Статус</option>
        <option value="created">Дата добавления</option>
      </select>
    </div>
  );
};

export default TodoSort;