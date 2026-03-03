# Практическое занятие №2  
Сервер на Node.js + Express

## Задание выполнено

Реализован REST API с полным набором CRUD-операций для сущности **Товар**  
Поля товара: `id` (string), `name` (string), `price` (number)

## Эндпоинты

| Метод  | Путь                     | Описание                        | Тело запроса (JSON)              |
|--------|--------------------------|----------------------------------|-----------------------------------|
| GET    | /api/products            | Получить все товары             | —                                 |
| GET    | /api/products/:id        | Получить товар по id            | —                                 |
| POST   | /api/products            | Создать новый товар             | { "name": "...", "price": 99999 } |
| PATCH  | /api/products/:id        | Обновить товар (частично)       | { "name": "...", "price": ... }   |
| DELETE | /api/products/:id        | Удалить товар                   | —                                 |

## Как запустить

```bash
npm install
node app.js
# или
npm start   (если добавить в package.json скрипт "start": "node app.js")