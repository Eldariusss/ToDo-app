This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Функционал:

-Регистрация и авторизация пользователей через Firebase Authentication.

-Создание, просмотр, редактирование и удаление задач.

-Подтверждение удаления задач через модальное окно.

Стек технологий:

-React: Фреймворк для построения пользовательского интерфейса.

-Firebase: Регистрация, авторизация и базовые настройки бэкенда.

-SCSS: Стилизация приложения.

Установка и запуск

Шаг 1: Клонирование репозитория
-git clone <URL-репозитория>
-cd <папка-репозитория>
Шаг 2: Установка зависимостей
-npm install

Шаг 3: Настройка Firebase

-Создайте новый проект в Firebase Console.

-Активируйте Authentication и включите метод входа "Email/Password".

-Скопируйте конфигурацию Firebase (объект firebaseConfig) из консоли.

-Создайте файл firebase.js в папке src и вставьте следующий код:
mport { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: i"<Ваш API ключ>",
  authDomain: "<Ваш authDomain>",
  projectId: "<Ваш projectId>",
  storageBucket: "<Ваш storageBucket>",
  messagingSenderId: "<Ваш messagingSenderId>",
  appId: "<Ваш appId>"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

Шаг 4: Запуск приложения:
-npm run dev
Приложение будет доступно по адресу: http://localhost:3000. Старница авторизации по адресу http://localhost:3000/auth
