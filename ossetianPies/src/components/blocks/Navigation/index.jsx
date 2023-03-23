import style from './style.module.scss';

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <ul className={style.categories}>
        <li className={style.item}>Все</li>
        <li className={style.item}>Осетинские</li>
        <li className={style.item}>Сладкие</li>
        <li className={style.item}>Овощные</li>
        <li className={style.item}>Сытные</li>
      </ul>

      <div className={style.sort}>
          <div><b>⯅ Сортировка по:</b> <span>популярности </span></div>
          <ul className={style.choose}>
            <li className={style.item}>Популярности</li>
            <li className={style.item}>Цене</li>
            <li className={style.item}>Алфавиту</li>
          </ul>
      </div>
    </div>
  )
}

export default Navigation;