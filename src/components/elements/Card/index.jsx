import { useState } from 'react';
import style from './style.module.scss';

const Card = ({ id, img, title, price, weight }) => {
  // Переменная, считает сколько товара добавили
  const [count, setCount] = useState(0)

  // Следит за состоянием активности размера веса
  const [activeWeight, setActiveWeight] = useState(0)

  /**cчетчик кнопки добавить */
  const onClickAdd = () => {
    setCount(count + 1)
  }

  return (
    <div className={style.card} id={id}>
      <div className={style.background}>
        <img src={img} alt="фото нашего пирога" />
      </div>
      <div className={style.description}>
        <h4>{title}</h4>
        <ul className={style.weight}>
          {
            weight.map((value, index) =>
              <li 
                onClick={() => setActiveWeight(index)}
                className={activeWeight === index ? style.buttonActive : style.button}
              >
                  {value} кг
              </li>)
          }
        </ul>
        <div className={style.buy}>
          <div className={style.price}>
            {price} ₽
          </div>
          <button onClick={onClickAdd} className={style.add}>
            <p>+ Добавить</p>
            <div className={style.count}>{count}</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;