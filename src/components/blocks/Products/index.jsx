import Card from '../../elements/Card';
import style from './style.module.scss';
import ossPies from '../../../assets/products/osspies.json'

const Products = () => {
  console.log(ossPies)
  return (
    <div className={style.products}>
      <h2 className={style.title}>Осетинские пироги</h2>
      <div className={style.items}>
        {
          ossPies.map((card) => (
            <Card {...card} />
          ))
        }
      </div>
    </div>
  )
}

export default Products;
