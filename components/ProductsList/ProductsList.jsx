import styles from './ProductsList.module.scss';
import {ProductItem} from '../ProductItem/ProductItem';

export default function ProductsList({products, setIsPopupOpened}) {

    return (
        <section>
            <div className="container">
                <h2 className="section__header">Линейка принтеров</h2>
                <ul className={styles.list}>
                    {products.map( (product, i) => (
                        <ProductItem key={`product_${i}`} product={product} setIsPopupOpened={setIsPopupOpened} />
                    ))}
                </ul>
            </div>
        </section>
    )
}