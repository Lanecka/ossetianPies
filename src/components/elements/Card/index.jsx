import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from "uuid"
import { addItem } from '../../../redux/slices/basketSlice';
import style from './Card.module.scss';

const Card = ({ id, img, title, price, description }) => {
  // переменная для переключение активности у веса
  const weight = [0.8, 1, 1.5, 2, 3]
  // Следит за состоянием активности размера веса
  const [activeWeight, setActiveWeight] = useState(0);
  const dispatch = useDispatch();
  // Сколько добавили раз карточку
  const basketCard = useSelector(state => state.basket.items.find((obj) => obj.id === id))

  const addedCount = basketCard ? basketCard.count : 0

  /** Кнопка добавить */
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      img,
      weight: weight[activeWeight],
      description
    }

    dispatch(addItem(item))
  }

  return (
    <div className={style.card}>
      <div className={style.background}>
        <img src={img} alt="фото нашего пирога" />
      </div>
      <div className={style.description}>
        <h4>{title}</h4>
        <ul className={style.weight}>
          {weight.map((value, index) =>
            <li onClick={() => setActiveWeight(index)}
              className={activeWeight === index ? style.buttonActive : style.button}
            >
              {value} кг
            </li>
          )}

        </ul>
        <div className={style.buy}>
          <div className={style.price}>
            {price} ₽
          </div>
          <button onClick={onClickAdd} className={style.add}>
            <p>+ Добавить</p>
            <div className={style.count}>{addedCount}</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;