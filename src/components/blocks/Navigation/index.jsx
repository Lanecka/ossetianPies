import { useState } from 'react';
import style from './Navigation.module.scss';

const Navigation = () => {
  // Состояние активности у индекса элемента в категориях
  const [indexCategorie, setIndexCategorie] = useState(0)
  // Открыть/закрыть сортировку
  const [open, setOpen] = useState(false)
  // Состояние активности у индекса элемента в сортеровке 
  const [indexSort, setIndexSort] = useState(0)

  /** список категорий */
  const categories = ['Все', 'Осетинские', 'Сладкие', 'Овощные', 'Сытные']
  /** Сортировка: Популярности, Цене, Алфавиту */
  const sortList = ['Популярности', 'Цене', 'Алфавиту']

  /** Выбранный элемент в сортировке */
  const sortItem = sortList[indexSort]

  /** Убираем попап при клике-выбора на список сортировать */
  const onClickSortItem = (index) => {
    setIndexSort(index)
    setOpen(false)
  }

  return (
    <div className={style.navigation}>
      <ul className={style.categories}>
        {
          categories.map((value, index) => (
            <li
              key={index}
              onClick={() => setIndexCategorie(index)}
              className={indexCategorie === index ? style.active : style.item}
            >
              {value}
            </li>
          ))
        }
      </ul>

      <div className={style.sort}>
        <div>
          {
            open ? '⯅ ' : '⯈ '
          }
          <b>Сортировка по:</b> 
          <span onClick={() => setOpen(!open)}>{sortItem}</span>
        </div>
        {
          open &&
            <ul className={style.choose}>
              {sortList.map((value, index) => (
                <li 
                  key={index}
                  onClick={() => onClickSortItem(index)}
                  className={style.item}
                >
                    {value}
                </li>
              ))}
            </ul>
        }
      </div>
    </div>
  )
}

export default Navigation;