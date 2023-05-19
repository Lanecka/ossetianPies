import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../../assets/img/logo/logo.svg';
import style from './Header.module.scss';
import SearchInput from '../../UI/SearchInput';

const Header = () => {
  const {totalPrice, totalCount} = useSelector(state => state.basket)

  // const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  return (
    <header className={style.header}>
      <Link to='/' className={style.logotype}>
        <img src={logoImg} alt="logotype" />
        <div style={style.logoName}>
          <h1>OssetiaPie - осетинские пироги</h1>
          <p>Самые вкусные домашние пироги</p>
        </div>
      </Link>
      <div className={style.interaction}>
        <SearchInput />
        <Link to='/basket' className={style.button}>
          <div className={style.count}>
            <span className={style.price}>{totalPrice} ₽</span>
            <span className={style.line}></span>
          </div>
          <div className={style.basket}>
            <FontAwesomeIcon icon={faCartShopping} className={style.icon} />
            <p>{totalCount}</p>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header;