import Link from 'next/link';
import styles from './ProductItem.module.scss';

export function ProductItem({ product, setIsPopupOpened}) {


    return(
        <li className={styles.item}>
                <div>
                    <div className={styles.mainWrapper}>
                        <h3 className={styles.title}>{product.title}</h3>
                        <div className={styles.imagesWrapper}>
                            <img className={styles.image} src={product.images[0]} alt={product.title} />
                            <img className={styles.imageBack} src={product.images[1]} alt={product.title} />
                        </div>
                    </div>
                   <ul className={styles.featuresList}>
                        {product.featuresInfo.map ( (feature, i) => (
                            <li key={`${product.title}_feature_${i}`} className={styles.featuresItem}>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <p className={styles.description}>{product.description}</p>
                </div>
            <div className={styles.buttonsWrapper}>
                <button className={styles.buttonSample} onClick={() => setIsPopupOpened(true)}>Получить консультацию</button>
                <Link href={product.link}><a className={styles.buttonMore}>Подробнее</a></Link>
            </div> 
        </li>
    )
}