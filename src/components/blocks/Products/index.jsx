import Card from '../../elements/Card';
import style from './style.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3010/product')
      .then(res => setProduct(res.data))
  }, [])

  return (
    <div className={style.products}>
      <h2 className={style.title}>Все пироги</h2>
      <div className={style.items}>
        {
          product.map((card) => (
            <Card key={card.id} {...card} />
          ))
        }
      </div>
    </div>
  )
}

export default Products;
