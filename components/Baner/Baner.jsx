import styles from './Baner.module.scss';
import Link from 'next/link';

export default function Baner() {
    return(
        <section className={styles.baner}>
            <div className={styles.banerWrapper}>
                <h2 className={styles.heading}>УФ оборудование для печати на любой поверхности</h2>
    
                <h3 className={styles.subheading}>Продаём и обслуживаем УФ оборудование Link Print</h3>
    
                <div className={styles.buttonsWrapper}>
                    <Link href="#contactUs"><button className={styles.button}>Оставить заявку</button></Link>
                    <Link href="#characteristics"><button className={styles.button}>Тех информация</button></Link>
                </div>
            </div>
        </section>
    )
}