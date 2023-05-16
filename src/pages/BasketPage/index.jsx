import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import EmptyBasket from '../../components/elements/Basket/EmptyBasket';
import BasketCard from '../../components/elements/Basket/BasketCard';
import style from './basketPage.module.scss';
import ButtonBack from '../../components/UI/ButtonBack';

const BasketPage = () => {
  return (
    <div className={style.basket}>
      <div className={style.title}>
        <FontAwesomeIcon icon={faCartShopping} className={style.icon} />
        <h2>Корзина</h2>
      </div>
      <BasketCard />
      {/* <EmptyBasket /> */}
      <div className={style.count}>
        <div className={style.quantity}>
          <div className={style.title}>
            <p>Кол-во товаров:</p>
            <h4>3 шт.</h4>
          </div>
          <ButtonBack />
        </div>
        <div className={style.quantityEnd}>
          <div className={style.title}>
            <p>Сумма заказа:</p>
            <h4>1 720 ₽</h4>
          </div>
          <button className={style.btn}>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  )
}

export default BasketPage;