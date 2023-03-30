import ButtonSwitch from '../../../UI/ButtonSwitch';
import style from './BasketCard.module.scss';

const BasketCard = () => {
  return (
    <div className={style.basketCard}>
      <div className={style.preview}>
        <div className={style.background}>
          <img src="img/products/apples.png" alt="превью пирога" />
        </div>
        <div className={style.description}>
          <div className={style.pie}>
            <h4 className={style.title}>Пирог с сыром и картофелем</h4>
            <p>
              картофель, сыр, зелень, масло сливочное
              дрожжевое
            </p>
          </div>
          <h4 className={style.weight}>0.8 кг</h4>
        </div>
        <div className={style.count}>
          <ButtonSwitch />
          <div className={style.price}>
            <h2>Цена:</h2>
            <p>550 ₽</p>
          </div>
        </div>
      </div>

      <button className={style.closed}>X</button>
    </div>
  )
}

export default BasketCard;