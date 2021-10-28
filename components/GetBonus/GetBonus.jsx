import styles from './GetBonus.module.scss'

export default function GetBonus ({setIsSurveyPopupOpened}) {
    return (
        <div className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>
                    ПОЛУЧИТЬ СТАРТОВЫЙ КОМПЛЕКТ КРАСКИ БЕСПЛАТНО
                </h2>
                <p className={styles.subTitle}>
                    Cоберите свою модификацию принтера, которая решит задачи вашего производства и 
                    <span>получите стартовый комплект краски бесплатно</span>
                </p>
                <button className={styles.button} onClick={() => setIsSurveyPopupOpened(true)}>Ответить на вопросы и получить комплект краски бесплатно</button>
            </div>
        </div>
    )
}