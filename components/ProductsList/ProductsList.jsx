import styles from './ProductsList.module.scss';
import products from '../../pages/api/products';
import {ProductItem} from '../ProductItem/ProductItem';

export default function ProductsList({setIsPopupOpened, setPopupProduct}) {

    return (
        <section>
            <div className="container">
                <h2 className="section__header">Линейка принтеров</h2>
                <ul className={styles.list}>
                    {products.map( (product, i) => (
                        <ProductItem setIsPopupOpened={setIsPopupOpened} setPopupProduct={setPopupProduct} key={`product_${i}`} product={product} />
                    ))}
                </ul>
            </div>
        </section>
    )
}