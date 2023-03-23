import Card from '../../elements/Card';
import style from './style.module.scss';

const Products = () => {
  return (
    <div className={style.products}>
      <h2 className={style.title}>Осетинские пироги</h2>
      <div className={style.items}>
        <Card
          img={`img/product/cheesePotato.png`}
          title={"Пирог с сыром и картофелем"}
          price={500}
        />
      </div>
    </div>
  )
}

export default Products;
