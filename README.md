# Фронтенд и бэкенд разработка  
Практические занятия 2025/2026 учебный год (4 семестр)

[![Дисциплина](https://img.shields.io/badge/Дисциплина-Фронтенд%20и%20бэкенд%20разработка-blue)](https://example.com)
[![Семестр](https://img.shields.io/badge/Семестр-4-й%20семестр-orange)](https://example.com)
[![Год](https://img.shields.io/badge/Учебный%20год-2025%2F2026-success)](https://example.com)

**Преподаватели:**  
Загородних Николай Анатольевич  
Краснослободцева Дарья Борисовна

**Институт:** ИПТИП  
**Кафедра:** Индустриального программирования

Это репозиторий содержит решения всех практических занятий по дисциплине. Каждое занятие реализовано в отдельной папке с независимым запуском.

## Структура проекта
front-back-practices/
├── practice-1/           → CSS-препроцессоры (SASS)
├── practice-2/           → Сервер на Node.js + Express (CRUD товаров)
├── practice-3/           → JSON, внешние API, тестирование в Postman
├── practice-4/           → Полноценный интернет-магазин (React + Express API)
│   ├── backend/          → серверная часть
│   └── frontend/         → клиентская часть (React)
├── practice-5/           → Расширенный REST API + документация Swagger
└── README.md


## Технологический стек

| Часть проекта     | Технологии                              |
|-------------------|------------------------------------------|
| Frontend          | HTML, SASS/SCSS, React, Axios, React Router |
| Backend           | Node.js, Express.js, nanoid             |
| Документация API  | Swagger / OpenAPI (swagger-ui-express)  |
| Тестирование      | Postman                                 |
| Препроцессоры CSS | SASS                                    |

## Практические занятия — краткое описание

### Практика 1 — CSS-препроцессоры
- Тема: переменные, вложенность, миксины  
- Задание: карточка товара с hover-эффектом  
- Файлы: `styles.scss` → компилируется в `styles.css`

**Запуск:**  
```bash
sass practice-1/styles.scss practice-1/styles.css
# затем открыть index.html в браузере

 Практика 2 — Сервер на Node.js + Express

Простой REST API для сущности «Товары»
Реализованы: GET / POST / GET/:id / PATCH / DELETE

Запуск:
Bash

cd practice-2
npm install
npm start
# → http://localhost:3000

Практика 3 — JSON и внешние API

Изучение структуры JSON
Парсинг, запросы к собственному API
Тестирование в Postman (скриншоты в папке screenshots/)
Примеры запросов к внешнему API (например, ExchangeRate-API)

Практика 4 — API + React (интернет-магазин)

Полноценное full-stack приложение «TechStore»
CRUD операций над товарами
React интерфейс + модальное окно редактирования/создания
Связь frontend ↔ backend через axios

Запуск:
# backend
cd practice-4/backend
npm install
npm start

# frontend (в новом терминале)
cd practice-4/frontend
npm install
npm start
# → http://localhost:3000 (или 3001 — смотря create-react-app)
Практика 5 — Расширенный REST API + Swagger

Добавлена автоматическая документация OpenAPI
Интерактивная Swagger UI по адресу /api-docs

Запуск:
Используйте backend из practice-5 (или замените backend из practice-4)
cd practice-5/backend   # или practice-4/backend если заменили
npm install
npm start
# → http://localhost:3000/api-docs

Автор
Студент 4 семестра ИПТИП
2025–2026 учебный год

Дата последнего обновления: февраль 2026