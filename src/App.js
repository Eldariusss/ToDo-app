import React, { useState } from 'react';
import { auth } from './firebase';
import './App.scss';



function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Состояние модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null); 

  // Регистрация
  const register = async () => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      setUser(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  // Логин
  const login = async () => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      setUser(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  // Логаут
  const logout = () => {
    auth.signOut();
    setUser(null);
  };

  // Добавление новой задачи
  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task }]); // Добавляем новую задачу
      setTask(''); // Очищаем поле ввода
    }
  };

  // Удаление задачи по ID
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Удаляем задачу с указанным ID
    setIsModalOpen(false); // Закрываем модальное окно
  };

  // Открытие модального окна с подтверждением удаления
  const openModal = (id) => {
    setTaskToDelete(id);
    setIsModalOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setTaskToDelete(null);
    setIsModalOpen(false);
  };

  // Редактирование задачи по ID
  const editTodo = (id, newText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  return (
    <div>
      <h1>ToDo App</h1>

      {!user ? (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login}>Логин</button>
          <button onClick={register}>Регистрация</button>
        </div>
      ) : (
        <div>
          <button onClick={logout}>Логаут</button>

          <div>
            <input
              type="text"
              placeholder="Введите задачу"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTodo}>Добавить задачу</button>
          </div>

          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.text}
                <button onClick={() => openDeleteModal(todo)}>Удалить</button>
                <button
                  onClick={() => {
                    const newText = prompt('Введите новый текст задачи:', todo.text);
                    if (newText) editTodo(todo.id, newText);
                  }}
                >
                  Редактировать
                </button>
              </li>
            ))}
          </ul>

          {/* Модальное окно для подтверждения удаления */}
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
      )}
    </div>
  );
}

export default App;
