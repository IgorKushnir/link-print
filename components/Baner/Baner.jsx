import styles from './Baner.module.scss';

export default function Baner() {
    return(
        <div className={styles.baner}>
            <div className={styles.banerWrapper}>
                <h2 className={styles.heading}>УФ оборудование для печати на любой поверхности</h2>
    
                <h3 className={styles.subheading}>Продаём и обслуживаем УФ оборудование Link Print</h3>
    
                <div className={styles.buttonsWrapper}>
                    <button className={styles.button}>Оставить заявку</button>
                    <button className={styles.button}>Тех информация</button>
                </div>
            </div>
        </div>
    )
}