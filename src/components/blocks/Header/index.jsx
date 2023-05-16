import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../../assets/img/logo/logo.svg';
import style from './Header.module.scss';
import SearchInput from '../../UI/SearchInput';

const Header = () => {
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
            <span className={style.price}>1 745 ₽</span>
            <span className={style.line}></span>
          </div>
          <div className={style.basket}>
            <FontAwesomeIcon icon={faCartShopping} className={style.icon} />
            <p>3</p>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header;