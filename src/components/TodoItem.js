import React from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => onEdit(todo.id)}>Редактировать</button>
      <button onClick={() => onDelete(todo.id)}>Удалить</button>
    </li>
  );
};

export default TodoItem;
