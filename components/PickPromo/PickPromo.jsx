import styles from './PickPromo.module.scss'

export default function PickPromo ({setIsPopupOpened}) {
    return (
        <div className={styles.section}>
            <div className="container">
                <div className={styles.titleWrap}>
                    <h2 className={styles.title1}>
                    КОНСУЛЬТАЦИЯ
                    </h2>
                    <h2 className={styles.title}>
                    И ПОДБОР ПРИНТЕРА
                    </h2>
                </div>
                <p className={styles.subTitle}>
                Оставьте заявку на бесплатную консультацию и подбор принтера, свяжемся с вами в течение нескольких минут
                </p>
                <button className={styles.button} onClick={() => setIsPopupOpened(true)}>Оставить заявку</button>
            </div>
        </div>
    )
}