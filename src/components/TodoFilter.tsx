// Импортируем React
import React from 'react';
// Импортируем хуки для работы с redux
import { useDispatch, useSelector } from 'react-redux';
// Импортируем действия и селектор для фильтрации задач
import { setFilter, selectFilter } from '../features/todos/todoSlice';
// Импортируем типы для фильтра (например, "all", "active", "completed")
import { FilterStatus } from '../types';

// Объявляем функциональный компонент TodoFilter
const TodoFilter: React.FC = () => {
  // Получаем функцию dispatch для отправки действий
  const dispatch = useDispatch();
  // Получаем текущий фильтр из redux store
  const currentFilter = useSelector(selectFilter);

  // Функция для смены фильтра задач
  const handleFilterChange = (filter: FilterStatus) => {
    // Отправляем действие в redux — меняем фильтр
    dispatch(setFilter(filter));
  };

  // JSX компонента
  return (
    // Контейнер для фильтра
    <div className="todo-filter">
      {/* Подпись к фильтру */}
      <span>Статус:</span>
      {/* Фильтр "все задачи" */}
      <label>
        <input
          type="radio" // Радиокнопка
          name="filter" // Группа радиокнопок — только одна может быть выбрана
          checked={currentFilter === 'all'} // Активна, если фильтр "all"
          onChange={() => handleFilterChange('all')} // Меняем фильтр на "all"
        />
        Все
      </label>
      {/* Фильтр "только активные задачи" */}
      <label>
        <input
          type="radio"
          name="filter"
          checked={currentFilter === 'active'}
          onChange={() => handleFilterChange('active')}
        />
        Активные
      </label>
      {/* Фильтр "только завершённые задачи" */}
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

// Экспортируем компонент
export default TodoFilter;