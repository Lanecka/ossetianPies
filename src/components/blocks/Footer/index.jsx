import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle, faYoutube, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.menu}>
          <ul className={style.navigation}>
            <li>Доставка</li>
            <li>О нас</li>
            <li>Акции</li>
            <li>Отзывы</li>
            <li>Контакты</li>
            <li>Вакансии</li>
          </ul>
        </div>
        <div className={style.contacts}>
          <p>
            г. Москва, Волгоградский проспект, 32, корп. 29
          </p>
          <p>
            Пекарня работает ежедневно, с 8:00 до 20:00 ч.
          </p>
          <div className={style.link}>
            <div className={style.phone}>
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.30377 3.99792C6.30379 3.99791 6.30404 3.99817 6.30444 3.99878ZM6.34683 4.06621L8.3541 7.26003C8.11154 7.48999 7.84697 7.71777 7.56223 7.96291C7.3175 8.17359 7.05788 8.39711 6.78454 8.64585C6.10705 9.26238 5.97619 10.2539 6.41466 11.0256C8.73326 15.1062 11.8957 16.963 13.3107 17.6296C14.1632 18.0312 15.0894 17.7143 15.605 17.058L16.994 15.2899C16.9949 15.2888 16.9948 15.2891 16.9943 15.2894C16.9942 15.2895 16.9952 15.2889 16.9973 15.2885C16.9994 15.2882 17.0015 15.2882 17.0032 15.2885C17.0045 15.2888 17.0062 15.2892 17.0091 15.291C17.8185 15.7906 18.9477 16.4694 19.985 17.0442C19.7987 18.1688 19.3708 18.824 18.8989 19.2246C18.4035 19.6451 17.7628 19.8665 17.0482 19.9464C15.6213 20.106 14.1728 19.6731 13.8516 19.5677C13.4971 19.3864 11.5536 18.3634 9.47717 16.7056C7.33609 14.9961 5.18918 12.7178 4.36809 10.1049C3.768 8.19529 3.99428 6.85151 4.46593 5.92459C4.92188 5.02852 5.65972 4.42034 6.34683 4.06621ZM5.62071 2.17596C6.56664 1.72731 7.54477 2.19509 8.00037 2.92002L10.1003 6.26123C10.5248 6.9367 10.5539 7.92415 9.86374 8.60058C9.56796 8.89048 9.15645 9.24679 8.77351 9.57836C8.56331 9.76036 8.36173 9.93491 8.19262 10.0869C10.1881 13.5617 12.856 15.1693 14.0694 15.7572L15.4201 14.0378C16.0579 13.226 17.1934 13.0363 18.0581 13.57C18.858 14.0636 19.9638 14.7281 20.966 15.2829C21.6343 15.653 22.1124 16.4244 21.977 17.2954C21.7337 18.8596 21.0982 19.999 20.1926 20.7678C19.3022 21.5237 18.2415 21.8444 17.2698 21.953C15.3585 22.1668 13.5305 21.588 13.1967 21.4763C13.1122 21.4479 13.042 21.4181 12.9666 21.3798C12.6083 21.1977 10.4963 20.0965 8.23016 18.2872C5.98759 16.4967 3.45851 13.9066 2.45514 10.7137C1.71811 8.36823 1.93614 6.46651 2.68011 5.0044C3.41105 3.56791 4.59475 2.66257 5.62071 2.17596Z" fill="white" />
              </svg>
              <p>
                8 (495) 137-67-37
              </p>
            </div>
            <div className={style.media}>
              <FontAwesomeIcon icon={faFacebook} className={style.item} />
              <FontAwesomeIcon icon={faInstagram} className={style.item} />
              <FontAwesomeIcon icon={faGoogle} className={style.item} />
              <FontAwesomeIcon icon={faYoutube} className={style.item} />
              <FontAwesomeIcon icon={faTelegram} className={style.item} />
              <FontAwesomeIcon icon={faVk} className={style.item} />
            </div>
          </div>
        </div>
        <div className={style.autor}>2023 Figma Design template by VeselovaIS</div>
      </div>
    </footer>
  )
}

export default Footer;