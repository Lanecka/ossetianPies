import ButtonBack from '../../components/UI/ButtonBack';
import style from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={style.block}>
      <img src="img/notFound/notFound.png" alt="Изображение для страницы 404 Not Found" />
      <div className={style.description}>
        <h4>404 Not Found Page</h4>
        <p>
          Такой страницы у нас нет, наши пироги ждут вас.
          Вернитесь на главную страницу, пожалуйста.
        </p>
          <ButtonBack />
      </div>
    </div>
  )
}

export default NotFoundPage;