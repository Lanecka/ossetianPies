import { useState } from 'react';
import style from './style.module.scss';

const Navigation = () => {
  // Состояние активности у индекса в категориях
  const [indexCategorie, setIndexCategorie] = useState(0)

  /** список категорий */
  const categories = ['Все', 'Осетинские', 'Сладкие', 'Овощные', 'Сытные']

  /** переключаем состояние в категориях */
  const onClickCategories = (index) => {
    setIndexCategorie(index)
  }

  return (
    <div className={style.navigation}>
      <ul className={style.categories}>
        {
          categories.map((value, index) => (
            <li 
              key = {index}
              onClick={() => onClickCategories(index)} 
              className={indexCategorie === index ? style.active : style.item}
            >
              {value}
            </li>
          ))
        }
      </ul>

      <div className={style.sort}>
        <div><b>⯅ Сортировка по:</b> <span>популярности </span></div>
        <ul className={style.choose}>
          <li className={style.item}>Популярности</li>
          <li className={style.item}>Цене</li>
          <li className={style.item}>Алфавиту</li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;