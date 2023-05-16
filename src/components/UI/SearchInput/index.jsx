import { useCallback, useContext, useRef, useState } from 'react';
import { SearchContext } from '../../../App';
import style from './style.module.scss';
import debounce from 'lodash.debounce';

const SearchInput = () => {
  // локальное, быстрое отображение из инпутов данных
  const [value, setValue] = useState('');
  // осуществляет поиск
  const { setSearch } = useContext(SearchContext);

  /** возращает изменения ref-объекта */
  const inputRef = useRef()

  /** Очистка строки ввода в инпуте */
  const onClickClose = () => {
    // Очищает инпут в контексте
    setSearch('')
    // очищает инпут локально
    setValue('')
    // оставляет курсив ввода в инпуте 
    inputRef.current.focus()
  }

  /** Оптимизирует процесс отправки запроса, чтобы не спрашивать у сервера каждый знак */
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearch(str)
    }, 150),
    []
  )

  /** Отслеживаем изменение в инпуте */
  const onChangeInput = (e) => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  return (
    <div className={style.search}>
      <svg className={style.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M22 10C22 14.1421 18.6421 17.5 14.5 17.5C12.7684 17.5 11.1738 16.9131 9.90432 15.9275C9.85651 16.0286 9.79077 16.1234 9.70711 16.2071L3.70711 22.2071C3.31658 22.5976 2.68342 22.5976 2.29289 22.2071C1.90237 21.8166 1.90237 21.1834 2.29289 20.7929L8.29289 14.7929C8.37656 14.7092 8.47136 14.6435 8.57252 14.5957C7.58685 13.3262 7 11.7316 7 10C7 5.85786 10.3579 2.5 14.5 2.5C18.6421 2.5 22 5.85786 22 10ZM20 10C20 6.96243 17.5376 4.5 14.5 4.5C11.4624 4.5 9 6.96243 9 10C9 13.0376 11.4624 15.5 14.5 15.5C17.5376 15.5 20 13.0376 20 10Z" fill="#9A9A9A" />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        placeholder='Поиск...'
      />
      {
        value && (
          <svg
            onClick={onClickClose}
            className={style.close}
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0945 12.576L8.24646 7.504H9.71846L11.1425 10.192C11.2811 10.4373 11.4091 10.6773 11.5265 10.912C11.6545 11.136 11.7985 11.4027 11.9585 11.712H12.0225C12.1718 11.4027 12.2998 11.136 12.4065 10.912C12.5238 10.6773 12.6465 10.4373 12.7745 10.192L14.1665 7.504H15.5745L12.7105 12.64L15.7665 18H14.2945L12.7585 15.168C12.6198 14.912 12.4758 14.6507 12.3265 14.384C12.1878 14.1067 12.0331 13.808 11.8625 13.488H11.7985C11.6491 13.808 11.5051 14.1067 11.3665 14.384C11.2278 14.6507 11.0945 14.912 10.9665 15.168L9.44646 18H8.03846L11.0945 12.576Z" fill="#9A9A9A" />
            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#9A9A9A" />
          </svg>
        )
      }
    </div>
  )
}

export default SearchInput;