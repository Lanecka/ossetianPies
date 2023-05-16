import './App.scss';
import Header from './components/blocks/Header';
import Footer from './components/blocks/Footer';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import BasketPage from './pages/BasketPage';
import { createContext, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './redux/slices/filterSlice';

/** Переменная контекст */
export const SearchContext = createContext()

function App() {
  // значения-инпута поиска
  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <SearchContext.Provider value={{ search, setSearch }}>
        <div className="container">
          <Header/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/basket' element={<BasketPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </SearchContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
