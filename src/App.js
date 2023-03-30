import './App.scss';
import Header from './components/blocks/Header';
import Footer from './components/blocks/Footer';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import BasketPage from './pages/BasketPage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
