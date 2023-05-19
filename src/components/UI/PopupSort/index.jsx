
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../../redux/slices/filterSlice';
import style from './PopupSort.module.scss';

/** Сортировка: Популярности, Цене, Алфавиту */
export const sortList = [
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

const PopupSort = () => {
  // Открыть/закрыть сортировку
  const [open, setOpen] = useState(false)

  const sortRef=useRef()

  const dispatch = useDispatch()
  const sort = useSelector(state => state.filter.sort)

    /** Убираем попап при клике-выбора на список сортировать */
    const onClickSortItem = (obj) => {
      dispatch(setSort(obj))
      setOpen(false)
    }

    /** Убираем попап при клике на любою область, вне попапа */
    useEffect(() => {
      const handleClickOutsite = (e) => {
        if(!e.composedPath().includes(sortRef.current)) {
          setOpen(false)
        }
      }

      document.body.addEventListener('click', handleClickOutsite)
      
      // При переходе на другую страницу, отключаем обработчик события на клик
      return () => document.body.removeEventListener('click', handleClickOutsite)
    }, [])

  return (
    <div ref={sortRef} className={style.sort}>
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
  )
}

export default PopupSort;