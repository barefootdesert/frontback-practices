import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:5001/api/products';

function ProductsList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      console.error('Ошибка загрузки:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Удалить товар?')) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts(products.filter(p => p.id !== id));
    } catch (err) {
      alert('Ошибка удаления');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-lg text-green-600 font-bold mt-2">{product.price} ₽</p>
          <div className="mt-4 flex gap-4">
            <Link to={`/edit/${product.id}`} className="text-blue-500 hover:underline">
              Редактировать
            </Link>
            <button 
              onClick={() => handleDelete(product.id)}
              className="text-red-500 hover:underline"
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;