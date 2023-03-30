import { Link } from 'react-router-dom';
import style from './ButtonBack.module.scss'

const ButtonBack = () => {
  return (
    <Link to='/' className={style.btnBack}>
      ◀ Вернуться на главную
    </Link>
  )
}

export default ButtonBack;