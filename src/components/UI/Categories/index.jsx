import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../../../redux/slices/filterSlice';
import style from './Categories.module.scss';

const Categories = () => {
  /** список категорий */
  const categories = ['Все', 'Осетинские', 'Сладкие', 'Овощные', 'Сытные']

  const dispatch = useDispatch()
  const categoryId = useSelector(state => state.filter.categoryId)

  /**  Отсеживаем нажатие на кнопку категории */
  const onClickCategorie = (id) => {
    dispatch(setCategoryId(id))
  }

  return (
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
  )
}

export default Categories;