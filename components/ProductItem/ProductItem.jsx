import Link from 'next/link';
import styles from './ProductItem.module.scss';

export function ProductItem({product}) {

    return(
        <li className={styles.item}>
            <Link href={product.link} title={product.title}>
                <img src={product.images[0]} alt={product.title} />
                <h3 className={styles.title}>{product.title}</h3>
                <ul className={styles.featuresList}>
                    {product.featuresList.map ( (feature, i) => (
                        <li key={`${product.title}_feature_${i}`} className={styles.featuresItem}>{feature}</li>
                    ))}
                </ul>
            </Link>
            <div className={styles.buttonsWrapper}>
                <Link className={styles.buttonMore} href={product.link}>Подробнее</Link>
                <Link className={styles.buttonSample} href={product.linkVideo}>Примеры работ</Link>
            </div>
        </li>
    )
}