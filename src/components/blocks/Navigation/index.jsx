import PopupSort from '../../UI/PopupSort';
import Categories from '../../UI/Categories';
import style from './Navigation.module.scss';

const Navigation = () => {
  
  return (
    <div className={style.navigation}>
      <Categories />
      <PopupSort />
    </div>
  )
}

export default Navigation;