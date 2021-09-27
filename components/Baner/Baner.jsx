import styles from './Baner.module.scss';
import Link from 'next/link';

export default function Baner({setIsDownloadPopupOpened, setIsPopupOpened}) {
    return(
        <section className={styles.baner}>
            <div className={styles.banerWrapper}>
                <h2 className={styles.heading}>Промышленные УФ принтеры</h2>
    
                <div className={styles.subheadingWrapper}>
                    <p className={styles.subheading}>18 готовых моделей принтеров для различных задач в наличии</p>
                    <p className={styles.subheading}>Спроектируем и разработаем принтер под Ваши задачи</p>
                </div>
    
                <div className={styles.buttonsWrapper}>
                    <button className={styles.button} onClick={() => setIsDownloadPopupOpened(true)}>Скачать каталог</button>
                    <button className={styles.button} onClick={() => setIsPopupOpened(true)}>Получить консультацию</button>
                </div>
            </div>
        </section>
    )
}