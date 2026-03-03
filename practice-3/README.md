# Практическое занятие №3 — JSON и внешние API

**Цель:**  
Изучить формат JSON, протестировать собственный REST API (из практики №2) и внешние публичные API с помощью Postman.

**Что сделано:**

1. Запущен сервер из practice-2[](http://localhost:3000)
2. Протестированы все CRUD-операции своего API:
   - GET /api/products
   - GET /api/products/:id
   - POST /api/products
   - PATCH /api/products/:id
   - DELETE /api/products/:id
   - Проверка 404
3. Выполнены запросы к внешним API:
   - Chuck Norris jokes
   - Exchange rates
   - JSONPlaceholder

**Скриншоты:** находятся в папке `/Screenshots/`

**Как воспроизвести:**
1. Запустить сервер:
   ```bash
   cd ../practice-2
   node app.js