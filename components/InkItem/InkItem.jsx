import Link from 'next/link';
import styles from './InkItem.module.scss';

export default function InkItem({setPopupProduct, setIsPopupOpened, ink}) {

  const openPopup = () => {
    setIsPopupOpened(true);
    setPopupProduct(ink);
}

  return (
    <li className={styles.item}>
        <div className={styles.imagesWrapper}>
            <img src={ink.images[0]} alt={ink.title} className={styles.image}/>
            <img className={styles.imageBack} src={ink.images[1]} alt={ink.title} />
        </div>
        <h3 className={styles.title}>{ink.title}</h3>
      <ul className={styles.featuresList}>
        {ink.features.map((feature, i) => (
          <li key={`${ink.title}_feature_${i}`} className={styles.featuresItem}>
            {feature}
          </li>
        ))}
      </ul>
      <div className={styles.buttonsWrapper}>
            <button className={styles.buttonMore} onClick={openPopup}>
          Подробнее
          </button>
        <Link href={ink.link}>
            <button className={styles.buttonSample} >
          Купить
          </button>
        </Link>
      </div>
    </li>
  );
}
