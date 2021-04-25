import styles from './Rewards.module.scss';
import YouTube from 'react-youtube';

const opts = {
    height: '550',
    width: '860',
    playerVars: {
      autoplay: 1,
    },
  };

  function onReady(event) {
    event.target.pauseVideo();
  }

export default function Rewards() {
    return (
        <section>
            <div className="container">
                <h2 className="section__header">Видео отзывы</h2>
                <YouTube
                className={styles.video}
                videoId="J8-VMaDOXqs"
                opts={opts}
                onReady={onReady}
              />
                <h2 className="section__header">Наши награды</h2>
                <p className={styles.text}>Мы получили бронзовую медаль на Варшавской выставке RemaDays, за инновационный продукт</p>
                <img className={styles.image} src="/img/png/prize.png" alt="Remadays prize" />
            </div>
        </section>
    )
}