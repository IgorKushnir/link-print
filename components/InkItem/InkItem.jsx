import Link from 'next/link';
import styles from './InkItem.module.scss';

export default function InkItem({ink}) {
  return (
    <li className={styles.item}>
      <Link href={ink.link} title={ink.title}>
        <div className={styles.imagesWrapper}>
            <img src={ink.images[0]} alt={ink.title} className={styles.image}/>
            <img className={styles.imageBack} src={ink.images[1]} alt={ink.title} />
        </div>
      </Link>
      <Link href={ink.link} title={ink.title}>
        <h3 className={styles.title}>{ink.title}</h3>
      </Link>
      <ul className={styles.featuresList}>
        {ink.features.map((feature, i) => (
          <li key={`${ink.title}_feature_${i}`} className={styles.featuresItem}>
            {feature}
          </li>
        ))}
      </ul>
      <div className={styles.buttonsWrapper}>
        <Link href={ink.link}>
            <button className={styles.buttonMore}>
          Подробнее
          </button>
        </Link>
        <Link href={ink.link}>
            <button className={styles.buttonSample} >
          Купить
          </button>
        </Link>
      </div>
    </li>
  );
}
