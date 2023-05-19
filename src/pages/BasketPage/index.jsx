import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import EmptyBasket from '../../components/elements/Basket/EmptyBasket';
import BasketCard from '../../components/elements/Basket/BasketCard';
import style from './basketPage.module.scss';
import ButtonBack from '../../components/UI/ButtonBack';

const BasketPage = () => {
  const dispatch = useDispatch()
  // все пиццы в редаксе
  const { items, totalPrice, totalCount } = useSelector(state => state.basket)

  // Условный рендер, если сумма = 0, пустая корзина
  if (!totalPrice) {
    return (<EmptyBasket />)
  }

  return (
    <div className={style.basket}>
      <div className={style.title}>
        <FontAwesomeIcon icon={faCartShopping} className={style.icon} />
        <h2>Корзина</h2>
      </div>
        { 
          items.map((obj) => <BasketCard key={obj.id} {...obj} />)
        }
      <div className={style.count}>
        <div className={style.quantity}>
          <div className={style.title}>
            <p>Кол-во товаров:</p>
            <h4>{totalCount} шт.</h4>
          </div>
          <ButtonBack />
        </div>
        <div className={style.quantityEnd}>
          <div className={style.title}>
            <p>Сумма заказа:</p>
            <h4>{totalPrice} ₽</h4>
          </div>
          <button className={style.btn}>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  )
}

export default BasketPage;