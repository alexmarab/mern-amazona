import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

import data from './data';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <a href="/">amazona</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          <h1>Featured Products</h1>
          <div className="products">
            {data.products.map((product) => (
              <div className="product" key={product.slug}>
                <a href={`/products/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a href={`/products/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <p>
                    <strong>{product.price} €</strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
