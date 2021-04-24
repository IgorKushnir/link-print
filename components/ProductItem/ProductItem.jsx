import Link from 'next/link';
import styles from './ProductItem.module.scss';

export function ProductItem({product: {title, link, images, featuresList,linkVideo}}) {

    return(
        <li className={styles.item}>
             <Link href={link} title={title}>
                <div className={styles.imagesWrapper}>
                    <img className={styles.image} src={images[0]} alt={title} />
                    <img className={styles.imageBack} src={images[1]} alt={title} />
                </div>
            </Link>
            <Link href={link} title={title}>
                <h3 className={styles.title}>{title}</h3>
            </Link>
               <ul className={styles.featuresList}>
                    {featuresList.map ( (feature, i) => (
                        <li key={`${title}_feature_${i}`} className={styles.featuresItem}>
                            {feature}
                        </li>
                    ))}
                </ul>
            <div className={styles.buttonsWrapper}>
                <Link href={link}><button className={styles.buttonMore}>Подробнее</button></Link>
                <Link href={linkVideo}><button className={styles.buttonSample} >Примеры работ</button></Link>
            </div> 
        </li>
    )
}