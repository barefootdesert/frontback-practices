import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const API_URL = 'http://localhost:5001/api/products';

function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', price: '' });
  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      axios.get(`${API_URL}/${id}`)
        .then(res => setForm({ name: res.data.name, price: res.data.price }))
        .catch(() => alert('Товар не найден'));
    }
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (isEdit) {
        await axios.patch(`${API_URL}/${id}`, form);
      } else {
        await axios.post(API_URL, form);
      }
      navigate('/');
    } catch (err) {
      alert('Ошибка сохранения');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl mb-4">{isEdit ? 'Редактировать' : 'Добавить'} товар</h2>
      
      <div className="mb-4">
        <label className="block mb-1">Название</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Цена (₽)</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
          min="1"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Сохранить
      </button>
    </form>
  );
}

export default ProductForm;