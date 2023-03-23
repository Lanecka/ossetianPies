// import axios from 'axios';
import React, { useState } from 'react';
import './App.scss';
import ContentPage from './pages/ContentPage';

function App() {
  const [products, setProducts] = useState([
      {
        id: 1,
        img: "img/products/cheesePotato.png",
        title: "Пирог с сыром и картофелем",
        price: "550"
      },
      {
        id: 2,
        img: "img/products/withMeat.png",
        title: "Пирог с мясом",
        price: "550"
      },
      {
        id: 3,
        img: "img/products/cheeseCurd.png",
        title: "Пирог с сыром и творогом",
        price: "550"
      }
    ])

  return (
    <div className="App">
      <ContentPage products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
