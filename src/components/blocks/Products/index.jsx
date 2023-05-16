import CardSkeleton from '../../elements/Card/CardSkeleton';
import Card from '../../elements/Card';
import style from './Products.module.scss';

const Products = ({ product, isLoading}) => {
  /** Макет загрузки карточек */
  const skeleton = [...new Array(6)].map((_, index) => (
    <CardSkeleton key={index} />
  ))
  /** Рендер карточек с бэка */
  const pies = product.map((card) => <Card key={card.id} {...card} />)

  return (
    <div className={style.products}>
      <h2 className={style.title}>Все пироги</h2>
      <div className={style.list}>
        <div className={style.items}>
          {
            isLoading ? skeleton : pies
          }
        </div>
      </div>
    </div>
  )
}

export default Products;
