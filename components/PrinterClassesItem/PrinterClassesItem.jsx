import styles from './PrinterClassesItem.module.scss'
import Link from 'next/link';

export default function PrinterClassesItem ({title, img, print, branches, link}) {
    return (
        <li className={styles.classItem}>
            <div className={styles.imageWrapper}>
                <img src={img} alt={title} className={styles.image} />
                </div>
            <div className={styles.infoWrapper}>
                <div className={styles.die} />
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.subtitle}>Печать</p>
                    <ul className={styles.printList}>
                        {print.map(p => (
                            <li className={styles.printItem}>- {p}</li>
                        ))}
                    </ul>
                    <p className={styles.subtitle}>Области производства</p>
                    <p>{branches}</p>
                        <div className={styles.separator} />
                        <Link href={link}>
                            <a className={styles.button}>
                                Смотреть модели
                            </a>
                        </Link>
            </div>
        </li>
    )
}