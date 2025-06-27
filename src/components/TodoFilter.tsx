import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from '../features/todos/todoSlice';
import { FilterStatus } from '../types';

const TodoFilter: React.FC = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);

  const handleFilterChange = (filter: FilterStatus) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="todo-filter">
      <span>Статус:</span>
      <label>
        <input
          type="radio"
          name="filter"
          checked={currentFilter === 'all'}
          onChange={() => handleFilterChange('all')}
        />
        Все
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          checked={currentFilter === 'active'}
          onChange={() => handleFilterChange('active')}
        />
        Активные
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          checked={currentFilter === 'completed'}
          onChange={() => handleFilterChange('completed')}
        />
        Завершенные
      </label>
    </div>
  );
};

export default TodoFilter;