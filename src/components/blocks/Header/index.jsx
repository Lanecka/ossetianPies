import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../../assets/img/logo/logotype.jpg';
import style from './style.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logoImg} alt="logotype" />
      <div className={style.button}>
        <div className={style.count}>
          <span className={style.price}>1 745 ₽</span>
          <span className={style.line}></span>
        </div>
        <div className={style.basket}>
          <FontAwesomeIcon icon={faCartShopping} className={style.icon}/>
          <p>3</p>
        </div>
      </div>

    </header>
  )
}

export default Header;