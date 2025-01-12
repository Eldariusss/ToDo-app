"use client"; // Указывает, что это клиентский компонент

import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../src/firebase"; // Путь к вашему Firebase конфигу


const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const auth = getAuth(app);

  const handleAuth = async () => {
    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert(`Регистрация успешна: ${userCredential.user.email}`);
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert(`Вход успешен: ${userCredential.user.email}`);
      }
    } catch (error) {
      alert(`Ошибка: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: "2em" }}>
      <h1>{isRegistering ? "Регистрация" : "Вход"}</h1>
      <div style={{ marginBottom: "1em" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginRight: "10px", padding: "0.5em", width: "250px" }}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "0.5em", width: "250px" }}
        />
      </div>
      <button onClick={handleAuth} style={{ padding: "0.5em 1em", marginRight: "10px" }}>
        {isRegistering ? "Зарегистрироваться" : "Войти"}
      </button>
      <button onClick={() => setIsRegistering(!isRegistering)} style={{ padding: "0.5em 1em" }}>
        {isRegistering ? "Уже есть аккаунт? Войти" : "Нет аккаунта? Зарегистрироваться"}
      </button>
    </div>
  );
};

export default AuthPage;
