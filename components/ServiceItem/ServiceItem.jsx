import styles from './ServiceItem.module.scss'

export default function ServiceItem ({service}) {
    return (
        <li className={styles.item}>
            <img src={service.image} alt={service.title} className={styles.image}/>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.text}>{service.text}</p>
        </li>
    )
}