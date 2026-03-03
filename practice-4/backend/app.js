// practice-4/backend/app.js
const express = require('express');
const { nanoid } = require('nanoid');
const cors = require('cors');

const app = express();
const PORT = 5001;  // другой порт, чтобы не конфликтовать с React (обычно 5173)

app.use(cors({ origin: 'http://localhost:5173' }));  // разрешаем запросы с Vite/React
app.use(express.json());

let products = [
  { id: nanoid(8), name: 'Ноутбук Lenovo', price: 75000 },
  { id: nanoid(8), name: 'Смартфон iPhone 16', price: 120000 },
  // добавь ещё 5–8 товаров по желанию
];

app.get('/api/products', (req, res) => res.json(products));

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  product ? res.json(product) : res.status(404).json({ error: 'Товар не найден' });
});

app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Некорректные данные' });
  }
  const newProduct = { id: nanoid(8), name: name.trim(), price: Number(price) };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.patch('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: 'Товар не найден' });

  const { name, price } = req.body;
  if (name) product.name = name.trim();
  if (typeof price === 'number' && price > 0) product.price = price;

  res.json(product);
});

app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Товар не найден' });

  const deleted = products.splice(index, 1)[0];
  res.json({ message: 'Удалено', deleted });
});

app.listen(PORT, () => {
  console.log(`Backend запущен → http://localhost:${PORT}`);
});