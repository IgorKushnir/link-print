import Link from 'next/link';
import styles from './ProductItem.module.scss';

export function ProductItem({setPopupProduct, setIsPopupOpened, product}) {

    const openPopup = () => {
        setIsPopupOpened(true);
        setPopupProduct(product);
    }

    return(
        <li className={styles.item}>
                <div className={styles.imagesWrapper}>
                    <img className={styles.image} src={product.images[0]} alt={product.title} />
                    <img className={styles.imageBack} src={product.images[1]} alt={product.title} />
                </div>
                <h3 className={styles.title}>{product.title}</h3>
               <ul className={styles.featuresList}>
                    {product.featuresList.map ( (feature, i) => (
                        <li key={`${product.title}_feature_${i}`} className={styles.featuresItem}>
                            {feature}
                        </li>
                    ))}
                </ul>
            <div className={styles.buttonsWrapper}>
                <button className={styles.buttonMore} onClick={openPopup}>Подробнее</button>
                <Link href={`#${product.linkVideo}`}><button className={styles.buttonSample} >Примеры работ</button></Link>
            </div> 
        </li>
    )
}