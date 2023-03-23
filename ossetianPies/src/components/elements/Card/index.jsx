import { useState } from 'react';
import style from './style.module.scss';

const Card = ({ id, img, title, price }) => {
  // Переменная, считает сколько товара добавили
  const [count, setCount] = useState(0)

  /**cчетчик кнопки добавить */
  const onClickAdd = () => {
    setCount(count + 1)
  }

  return (
    <div className={style.card} id={id}>
      <img src={img} alt="фото нашего пирога" className={style.background} />
      <div className={style.description}>
        <h4>{title}</h4>
        <div className={style.weight}>
          <div className={style.buttonActive}>
            0.8 кг
          </div>
          <div className={style.button}>
            1 кг
          </div>
          <div className={style.button}>
            1.5 кг
          </div>
          <div className={style.button}>
            2 кг
          </div>
          <div className={style.button}>
            3 кг
          </div>
        </div>
        <div className={style.buy}>
          <div className={style.price}>
            {price} ₽
          </div>
          <div onClick={onClickAdd} className={style.add}>
            <p>+ Добавить</p>
            <div className={style.count}>{count}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;