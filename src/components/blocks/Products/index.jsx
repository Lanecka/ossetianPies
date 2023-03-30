import { useEffect, useState } from 'react';
import axios from 'axios';
import CardSkeleton from '../../elements/Card/CardSkeleton';
import Card from '../../elements/Card';
import style from './Products.module.scss';

const Products = () => {
  /* Сохраняем в useState наш список продуктов с бэка */
  const [product, setProduct] = useState([]);
  /* Пока ожидания загрузку данных списка продуктов  */
  const [isLoading, setIsLoading] = useState(true)

  /** Подключаем сервак со списком продуктов (локал для удобной работы фронтенду) */
  useEffect(() => {
    async function fetchData() {
      const productResponse = await axios.get('http://localhost:3010/product')

      setIsLoading(false)

      setProduct(productResponse.data)
    }

    fetchData()
  }, [])

  return (
    <div className={style.products}>
      <h2 className={style.title}>Все пироги</h2>
      <div className={style.items}>
        {
          isLoading ?
            [...new Array(6)].map((_, index) => (
              <CardSkeleton key={index} />
            )) :
            product.map((card) => (
              <Card key={card.id} {...card} />
            ))
        }
      </div>
    </div>
  )
}

export default Products;
