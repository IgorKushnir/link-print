import styles from './GetConsult.module.scss'

export default function GetConsult ({setIsPopupOpened}) {
    return (
        <div className={styles.section}>
            <div className="container">
                <h2 className={styles.title1}>
                        КОНСУЛЬТАЦИЯ 
                </h2>
                <h2 className={styles.title2}>
                И ПОДБОР ПРИНТЕРА
                </h2>
                <p className={styles.subTitle}>
                Оставьте заявку на бесплатную консультацию и подбор принтера, свяжемся с вами в течение нескольких минут
                </p>
                <button className={styles.button} onClick={() => setIsPopupOpened(true)}>Оставить заявку</button>
            </div>
        </div>
    )
}