# Практическое занятие №4  
API + React

**Дисциплина**  
Фронтенд и бэкенд разработка

**Институт**  
ИПТИП

**Кафедра**  
Индустриального программирования

**Преподаватели**  
Загородних Николай Анатольевич  
Краснослободцева Дарья Борисовна

**Семестр**  
4 семестр, 2025/2026 учебный год

## Цель занятия

Подробно рассмотреть CRUD-операции (Create, Read, Update, Delete) в REST API  
и связать серверную часть (Express) с клиентским интерфейсом на **React**.

В результате получается полноценное full-stack приложение — простой интернет-магазин гаджетов.

## Технологический стек

| Часть       | Технологии                              |
|-------------|------------------------------------------|
| Backend     | Node.js, Express.js, nanoid, cors        |
| Frontend    | React (Vite), Axios, React Router DOM    |
| Связь       | REST API[](http://localhost:5000)         |
| Стили       | Tailwind CSS (опционально) или обычный CSS |

## Структура проекта
practice-4/
├── backend/
│   ├── app.js
│   ├── package.json
│   └── node_modules/
└── frontend/
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── ProductsList.jsx
│   │   └── ProductForm.jsx
│   ├── api/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── vite.config.js
├── package.json
└── node_modules/


## Как запустить проект

### 1. Backend (сервер)

```bash
cd practice-4/backend
npm install
node app.js
# или
npm start

cd practice-4/frontend
npm install
npm run dev