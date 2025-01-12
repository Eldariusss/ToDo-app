'use client';

import React, { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task }]);
      setTask('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setIsModalOpen(false);
  };

  const openDeleteModal = (todo) => {
    setTaskToDelete(todo);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <input
        type="text"
        placeholder="Введите задачу"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Добавить задачу</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => openDeleteModal(todo)}>Удалить</button>
            <button
              onClick={() => {
                const newText = prompt('Введите новый текст задачи:', todo.text);
                if (newText) {
                  setTodos(todos.map((task) => (task.id === todo.id ? { ...task, text: newText } : task)));
                }
              }}
            >
              Редактировать
            </button>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Вы уверены, что хотите удалить задачу?</h3>
            <button onClick={() => deleteTodo(taskToDelete.id)}>Да</button>
            <button onClick={closeDeleteModal}>Нет</button>
          </div>
        </div>
      )}
    </div>
  );
}
