// Импортируем React
import React from 'react';
// Импортируем хуки для работы с redux store
import { useDispatch, useSelector } from 'react-redux';
// Импортируем действие и селектор для сортировки списка задач
import { setSort, selectSort } from '../features/todos/todoSlice';
// Импортируем типы для корректной типизации
import { RootState } from '../store';
import { SortOption } from '../features/todos/todoSlice';

// Объявляем функциональный компонент TodoSort
const TodoSort: React.FC = () => {
  // Получаем функцию dispatch
  const dispatch = useDispatch();
  // Получаем текущую сортировку из redux store (через селектор)
  const currentSort = useSelector((state: RootState) => selectSort(state));

  // Обработчик изменения сортировки
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Отправляем действие в redux — меняем сортировку
    dispatch(setSort(e.target.value as SortOption));
  };

  // JSX компонента
  return (
    // Контейнер для сортировки задач
    <div className="todo-sort">
      {/* Подпись к сортировке */}
      <span>Сортировка:</span>
      {/* Выпадающий список для выбора варианта сортировки */}
      <select value={currentSort} onChange={handleSortChange}>
        {/* Вариант сортировки — по имени задачи */}
        <option value="name">Наименование</option>
        {/* Вариант сортировки — по статусу задачи */}
        <option value="status">Статус</option>
        {/* Вариант сортировки — по дате добавления */}
        <option value="created">Дата добавления</option>
      </select>
    </div>
  );
};

// Экспортируем компонент
export default TodoSort;