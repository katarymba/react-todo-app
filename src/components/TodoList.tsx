// Импортируем React — библиотеку для работы с компонентами
import React from 'react';
// Импортируем хук useSelector для доступа к данным из redux store
import { useSelector } from 'react-redux';
// Импортируем селектор, который вернёт задачи с учётом фильтров и сортировки
import { selectFilteredSortedTodos } from '../features/todos/todoSlice';
// Импортируем компонент для отображения одной задачи
import TodoItem from './TodoItem';

// Объявляем функциональный компонент TodoList
const TodoList: React.FC = () => {
  // Получаем список задач из redux store с помощью селектора
  const todos = useSelector(selectFilteredSortedTodos);

  // JSX-верстка компонента
  return (
    // Контейнер для списка задач
    <div className="todo-list">
      {/* Заголовок */}
      <h2>Список задач</h2>
      {/* Если задач нет — выводим сообщение, иначе отображаем список */}
      {todos.length === 0 ? (
        <div className="todo-empty">Нет задач для отображения</div>
      ) : (
        // Для каждой задачи создаём отдельный компонент TodoItem
        todos.map((todo) => (
          // Ключ для React — уникальный id задачи
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
};

// Экспортируем компонент для использования в других частях приложения
export default TodoList;