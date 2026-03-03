// Практическое занятие №2
// Сервер на Node.js + Express
// Полный CRUD для товаров: id, name, price
// Дисциплина: Фронтенд и бэкенд разработка, 4 семестр, 2025/2026 уч. год

const express = require('express');
const { nanoid } = require('nanoid');

const app = express();
const PORT = 3000;

// ────────────────────────────────────────────────
// ОБЯЗАТЕЛЬНЫЙ middleware — без него req.body всегда undefined
// Должен стоять САМЫМ ПЕРВЫМ после создания app
// ────────────────────────────────────────────────
app.use(express.json());

// Для отладки: выводим каждый входящий запрос в консоль сервера
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    if (req.method === 'POST' || req.method === 'PATCH' || req.method === 'PUT') {
        console.log('Body:', req.body);
    }
    next();
});

// In-memory хранилище (массив товаров)
let products = [
    { id: nanoid(8), name: 'Porcupine Tree - Deadwing (2005)', price: 5990 },
    { id: nanoid(8), name: 'Opeth - Still Life (1999)', price: 4950 },
    { id: nanoid(8), name: 'Кино - Группа Крови (1988)', price: 3990 }
];

// ────────────────────────────────────────────────
// GET /api/products          → все товары
// ────────────────────────────────────────────────
app.get('/api/products', (req, res) => {
    res.json(products);
});

// ────────────────────────────────────────────────
// GET /api/products/:id      → один товар
// ────────────────────────────────────────────────
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Товар не найден' });
    }
    res.json(product);
});

// ────────────────────────────────────────────────
// POST /api/products         → создать товар
// ────────────────────────────────────────────────
app.post('/api/products', (req, res) => {
    const { name, price } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Поле "name" обязательно (непустая строка)' });
    }

    if (typeof price !== 'number' || isNaN(price) || price <= 0) {
        return res.status(400).json({ error: 'Поле "price" обязательно (положительное число)' });
    }

    const newProduct = {
        id: nanoid(8),
        name: name.trim(),
        price: Number(price)
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

// ────────────────────────────────────────────────
// PATCH /api/products/:id    → обновить товар (частично)
// ────────────────────────────────────────────────
app.patch('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Товар не найден' });
    }

    const { name, price } = req.body;

    if (name !== undefined) {
        if (typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ error: 'name должен быть непустой строкой' });
        }
        product.name = name.trim();
    }

    if (price !== undefined) {
        if (typeof price !== 'number' || isNaN(price) || price <= 0) {
            return res.status(400).json({ error: 'price должен быть положительным числом' });
        }
        product.price = Number(price);
    }

    res.json(product);
});

// ────────────────────────────────────────────────
// DELETE /api/products/:id   → удалить товар
// ────────────────────────────────────────────────
app.delete('/api/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ error: 'Товар не найден' });
    }

    const deleted = products.splice(index, 1)[0];
    res.json({ message: 'Товар удалён', deleted });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен → http://localhost:${PORT}`);
    console.log('Эндпоинты:');
    console.log('  GET    /api/products');
    console.log('  GET    /api/products/:id');
    console.log('  POST   /api/products     → { "name": "...", "price": 12345 }');
    console.log('  PATCH  /api/products/:id  → { "price": 99999 }');
    console.log('  DELETE /api/products/:id');
});