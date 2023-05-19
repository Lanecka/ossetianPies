import { useState } from 'react';
// import ButtonSwitch from '../../../UI/ButtonSwitch';
import style from './BasketCard.module.scss';
import { addItem, minusItem, removeItem} from '../../../../redux/slices/basketSlice';
import { useDispatch, useSelector } from 'react-redux';

const BasketCard = ({ id, title, price, img, weight, description, count }) => {
  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(addItem({
      id
    }))
  }

  const onClickMinus = () => {
    dispatch(minusItem(id))
  }

  const onClickClose = () => {
    if (window.confirm(`Вы уверены, что хотите удалить этот ${title} из корзины?`))
    dispatch(removeItem(id))
  }


  return (
    <div className={style.basketCard} >
      <div className={style.preview}>
        <div className={style.background}>
          <img src={img} alt="превью пирога" />
        </div>
        <div className={style.description}>
          <div className={style.pie}>
            <h4 className={style.title}>{title}</h4>
            <p>
              {description}
            </p>
          </div>
          <h4 className={style.weight}>{weight} кг</h4>
        </div>
        <div className={style.count}>

          {/** регулировать кол-во */}
          <div className={style.btn}>
            <button onClick={onClickMinus} className={style.switch}>
              <svg

                className={style.minus}
                width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2" y1="2" x2="18" y2="2" stroke="#FF0000" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </button>
            <h2>{count}</h2>
            <button onClick={onClickPlus} className={style.switch}>
              <svg

                className={style.plus}
                width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10H18" stroke="#FF0000" strokeWidth="4" strokeLinecap="round" />
                <path d="M10 18L10 2" stroke="#FF0000" strokeWidth="4" strokeLinecap="round" />
              </svg>

            </button>
          </div>

          <div className={style.price}>
            <h2>Цена:</h2>
            <p>{price * count} ₽</p>
          </div>
        </div>
      </div>

      <button onClick={onClickClose} className={style.closed}>X</button>
    </div>
  )
}

export default BasketCard;