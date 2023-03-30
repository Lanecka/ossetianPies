import ButtonBack from '../../../UI/ButtonBack';
import style from './EmptyBasket.module.scss';

const EmptyBasket = () => {
  return (
    <div className={style.empty}>
      <img src="img/basket/empty.png" />
      <div className={style.description}>
        <h4>В корзине пока ничего нет!
          <br />
          Это отличная возможность ее заполнить.</h4>
        <p>
          Воспользуйтесь каталогом, чтобы добавить
          товар в корзину
        </p>
        <ButtonBack />
      </div>
    </div>
  )
}

export default EmptyBasket;