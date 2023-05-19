import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navigation, { sortList } from '../../components/blocks/Navigation';
import Products from '../../components/blocks/Products';
import Pagination from '../../components/UI/Pagination';
import { SearchContext } from '../../App';
import { setCurrentPage, setFilters } from '../../redux/slices/filterSlice';


const HomePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const isSearch = useRef(false)
  const isMounted = useRef(false)

  /** передаем со стейта состояния по умолчанию */
  const { categoryId, sort, currentPage } = useSelector(state => state.filter)

  const { search } = useContext(SearchContext)

  /* Сохраняем в useState наш список продуктов с бэка */
  const [product, setProduct] = useState([]);
  /* Пока ожидания загрузку данных списка продуктов  */
  const [isLoading, setIsLoading] = useState(true);

  const onChangePage = number => {
    dispatch(setCurrentPage(number))
  }

/** Подключаем сервак со списком продуктов */
  const fetchPies = () => {
    setIsLoading(true)

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const catagory = categoryId > 0 ? `categorie=${categoryId}` : ''
    const searchPies = search ? `&search=${search}` : ''

    axios
    .get(
      `https://63d928855a330a6ae175d62c.mockapi.io/products?page=${currentPage}&limit=6&${catagory}&sortBy=${sortBy}&order=${order}${searchPies}`
    )
    .then((res) => {
      setProduct(res.data)
      setIsLoading(false)
    })
  }

  // useEffect(() => {
  //   if (window.location.search) {
  //     // url-адрес превращаем в объект
  //     const params = qs.parse(window.location.search.substring(1))

  //     const sortURL = sortList.find(obj => obj.sortProperty === params.sortProperty)

  //     dispatch(
  //       setFilters({
  //         ...params,
  //         sortURL
  //       })
  //     )
  //     isSearch.current = true
  //   }

  // }, [])

  /** Активируем функцию подключения сервака со списком продуктов */
  useEffect(() => {
    window.scrollTo(0, 0)

    fetchPies()

    // if (!isSearch.current){
    //   fetchPies()
    // }

    // isSearch.current = false
  }, [categoryId, sort, search, currentPage])

  /** Парсим нашу строку адреса в строку */
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage
      })

      navigate(`?${queryString}`)
    }

    isMounted.current = true
  }, [categoryId, sort, currentPage])

  return (
    <>
      <Navigation />
      <Products product={product} isLoading={isLoading} />
      <Pagination currentPagee={currentPage} onChangePage={onChangePage} />
    </>
  )
}

export default HomePage;