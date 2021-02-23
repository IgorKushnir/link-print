import styles from './Baner.module.scss';

export default function Baner() {
    return(
        <div className={styles.banerWrapper}>
            <h2 className={styles.heading}>УФ оборудование для печати на любой поверхности</h2>

            <h3 className={styles.subheading}>«Мы не создавали сайт, чтобы продать Link Print. Мы создали сайт, чтобы вам было удобно его выбрать»</h3>

            <div className={styles.buttonsWrapper}>
                <button className={styles.button}>Оставить заявку</button>
                <button className={styles.button}>Тех информация</button>
            </div>
        </div>
    )
}