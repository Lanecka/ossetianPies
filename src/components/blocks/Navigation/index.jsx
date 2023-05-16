import { useState } from 'react';
import style from './Navigation.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../../redux/slices/filterSlice';

const Navigation = ({ categoryId, onClickCategorie }) => {
  // Открыть/закрыть сортировку
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const sort = useSelector(state => state.filter.sort)

  /** список категорий */
  const categories = ['Все', 'Осетинские', 'Сладкие', 'Овощные', 'Сытные']
  /** Сортировка: Популярности, Цене, Алфавиту */
  const sortList = [
    {
      name: 'Популярности (desk)',
      sortProperty: 'popular'
    },
    {
      name: 'Популярности (asc)',
      sortProperty: '-popular'
    },
    {
      name: 'Цене(desk)',
      sortProperty: 'price'
    },
    {
      name: 'Цене (asc)',
      sortProperty: '-price'
    },
    {
      name: 'Алфавиту (desk)',
      sortProperty: 'title'
    },
    {
      name: 'Алфавиту (asc)',
      sortProperty: '-title'
    }
  ]

  /** Убираем попап при клике-выбора на список сортировать */
  const onClickSortItem = (obj) => {
    dispatch(setSort(obj))
    setOpen(false)
  }

  return (
    <div className={style.navigation}>
      <ul className={style.categories}>
        {
          categories.map((value, index) => (
            <li
              key={index}
              onClick={() => onClickCategorie(index)}
              className={categoryId === index ? style.active : style.item}
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
          <span onClick={() => setOpen(!open)}>{sort.name}</span>
        </div>
        {
          open &&
          <ul className={style.choose}>
            {sortList.map((obj, index) => (
              <li
                key={index}
                onClick={() => onClickSortItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? style.active : style.item}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  )
}

export default Navigation;