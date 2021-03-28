import styles from './Rewards.module.scss';

export default function Rewards() {
    return (
        <section>
            <div className="container">
                <h2 className="section__header">Видео отзывы</h2>
                <video className={styles.video} src="https://www.youtube.com/watch?v=J8-VMaDOXqs" />
                <h2 className="section__header">Наши награды</h2>
                <p className={styles.text}>Мы получили бронзовую медаль на Варшавской выставке RemaDays, за инновационный продукт</p>
                <img className={styles.image} src="/img/png/prize.png" alt="Remadays prize" />
            </div>
        </section>
    )
}