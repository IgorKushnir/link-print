import Link from 'next/link';
import styles from './ProductItem.module.scss';

export function ProductItem({setPopupProduct, setIsPopupOpened, product}) {

    const openPopup = () => {
        setIsPopupOpened(true);
        setPopupProduct(product);
    }

    return(
        <li className={styles.item}>
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
            <div className={styles.buttonsWrapper}>
                <Link href={`#${product.linkVideo}`}><a className={styles.buttonSample} >Примеры работ</a></Link>
                <Link href={product.link}><a className={styles.buttonMore} onClick={openPopup}>Подробнее</a></Link>
            </div> 
        </li>
    )
}