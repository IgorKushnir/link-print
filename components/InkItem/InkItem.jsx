import Link from 'next/link';
import styles from './InkItem.module.scss';

export default function InkItem({ink}) {

    return(
        <li className={styles.item}>
            <Link href={ink.link} title={ink.title}>
                <img src={ink.images[0]} alt={ink.title} />
                <h3 className={styles.title}>{ink.title}</h3>
                <ul className={styles.featuresList}>
                    {ink.features.map ( (feature, i) => (
                        <li key={`${ink.title}_feature_${i}`} className={styles.featuresItem}>{feature}</li>
                    ))}
                </ul>
            </Link>
            <div className={styles.buttonsWrapper}>
                <Link className={styles.buttonMore} href={ink.link}>Подробнее</Link>
                <Link className={styles.buttonSample} href={ink.link}>Купить</Link>
            </div>
        </li>
    )
}