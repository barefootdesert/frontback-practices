import { Routes, Route, Link } from 'react-router-dom';
import ProductsList from './pages/ProductsList.jsx';
import ProductForm from './pages/ProductForm.jsx';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Магазин гаджетов</h1>
      
      <nav className="mb-8 flex justify-center gap-6">
        <Link to="/" className="text-blue-600 hover:underline">Список товаров</Link>
        <Link to="/add" className="text-blue-600 hover:underline">Добавить товар</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/add" element={<ProductForm />} />
        <Route path="/edit/:id" element={<ProductForm />} />
      </Routes>
    </div>
  );
}

export default App;