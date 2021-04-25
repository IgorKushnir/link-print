import styles from './CharacteristicsItem.module.scss'

export default function CharacteristicsItem ({characteristic}) {
    return (
        <li className={styles.item} style={{backgroundImage: `url(${characteristic.image})`}}>
            <div className={styles.backdrop}></div>
            <div className={styles.textWrapper}>
                <h4 className={styles.heading}>{characteristic.title}</h4>
                <h5 className={styles.subheading}>{characteristic.type}</h5>
            </div>
            <a className={styles.link} href={characteristic.link} target="_blank" rel="nofollow noreferrer">Скачать</a>
        </li>
    )
}