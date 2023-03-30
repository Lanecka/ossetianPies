import { useState } from 'react';
import style from './ButtonSwitch.module.scss'

const ButtonSwitch = () => {
  const [isAdded, setIsAdded] = useState(0);

  const onClickPlus = () => {
    let count = isAdded + 1

    if (count < 10) {
      setIsAdded(count)
    } else {
      setIsAdded(9)
    }
  }

  const onClickMinus = () => {
    let count = isAdded - 1

    if (count > 0) {
      setIsAdded(count)
    } else {
      setIsAdded(0)
    }
  }

  return (
    <div className={style.btn}>
      <button onClick={onClickMinus} className={style.switch}>
        <svg

          className={style.minus}
          width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="2" y1="2" x2="18" y2="2" stroke="#FF0000" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </button>
      <h2>{isAdded}</h2>
      <button onClick={onClickPlus} className={style.switch}>
        <svg

          className={style.plus}
          width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10H18" stroke="#FF0000" strokeWidth="4" strokeLinecap="round" />
          <path d="M10 18L10 2" stroke="#FF0000" strokeWidth="4" strokeLinecap="round" />
        </svg>

      </button>
    </div>
  )
}

export default ButtonSwitch;
