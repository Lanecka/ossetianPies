import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from '../../components/blocks/Navigation';
import Products from '../../components/blocks/Products';
import Pagination from '../../components/UI/Pagination';
import { SearchContext } from '../../App';
import { useDispatch, useSelector} from 'react-redux';
import { setCategoryId, setSort, setCurrentPage } from '../../redux/slices/filterSlice';

const HomePage = () => {
  const dispatch = useDispatch()
  /** передаем со стейта состояния по умолчанию */ 
  const { categoryId, sort, currentPage } = useSelector(state => state.filter)

  /**  Отсеживаем нажатие на кнопку категории */
  const onClickCategorie = (id) => {
    dispatch(setCategoryId(id))
  }

  const { search } = useContext(SearchContext)

  /* Сохраняем в useState наш список продуктов с бэка */
  const [product, setProduct] = useState([]);
  /* Пока ожидания загрузку данных списка продуктов  */
  const [isLoading, setIsLoading] = useState(true);  

  const onChangePage = number => {
    dispatch(setCurrentPage(number))
  }

  /** Подключаем сервак со списком продуктов (локал для удобной работы фронтенду) */
  useEffect(() => {
    async function fetchData() {
      const sortBy = sort.sortProperty.replace('-', '');
      const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
      const catagory = categoryId > 0 ? `categorie=${categoryId}` : ''
      const searchPies = search ? `&search=${search}` : ''

      setIsLoading(true)

      const productResponse = await axios.get(`https://63d928855a330a6ae175d62c.mockapi.io/products?page=${currentPage}&limit=6&${catagory}&sortBy=${sortBy}&order=${order}${searchPies}`
      )
      // Сортировка не работает на локальном сервере React
      // const productResponse = await axios.get('http://localhost:3010/product')

      setIsLoading(false)

      setProduct(productResponse.data)
    }

    fetchData()
  }, [categoryId, sort, search, currentPage])

  return (
    <>
      <Navigation
        categoryId={categoryId} onClickCategorie={onClickCategorie}
      />
      <Products product={product} isLoading={isLoading} />
      <Pagination currentPagee={currentPage} onChangePage={onChangePage} />
    </>
  )
}

export default HomePage;