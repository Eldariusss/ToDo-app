import React from 'react';
import '../src/styles/App.scss';



export const metadata = {
  title: 'Мое ToDo приложение',
  description: 'Простое ToDo приложение, созданное с использованием Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* Здесь можно добавить дополнительные мета-теги, ссылки или стили */}
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
