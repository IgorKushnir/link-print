import styles from './Baner.module.scss';
import Link from 'next/link';

export default function Baner() {
    return(
        <section className={styles.baner}>
            <div className={styles.banerWrapper}>
                <h2 className={styles.heading}>Промышленные УФ принтеры</h2>
    
                <div className={styles.subheadingWrapper}>
                    <p className={styles.subheading}>18 готовых моделей принтеров для различных задач в наличии</p>
                    <p className={styles.subheading}>Спроектируем и разработаем принтер под Ваши задачи</p>
                </div>
    
                <div className={styles.buttonsWrapper}>
                    <Link href="#contactUs"><button className={styles.button}>Оставить заявку</button></Link>
                    <Link href="#characteristics"><button className={styles.button}>Тех информация</button></Link>
                </div>
            </div>
        </section>
    )
}