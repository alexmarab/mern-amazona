import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

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
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
