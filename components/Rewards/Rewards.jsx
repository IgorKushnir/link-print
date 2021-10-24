import { useEffect, useState } from 'react';
import styles from './Rewards.module.scss';
import YouTube from 'react-youtube';

export default function Rewards() {
  const [opts, setOpts] = useState(null);

  useEffect(() => {
    const windowWidth = document.querySelector('.container').clientWidth;

    const width = windowWidth * 0.8;
    const height = windowWidth * 0.45;

    setOpts({
      height,
      width,
      playerVars: {
        autoplay: 1
      },
    })
  }, [])

  function onReady(event) {
    event.target.pauseVideo();
  }

    return (
        <section>
            <div className="container">
                {/* <h2 className={styles.heading}>Видео отзывы</h2>
                {opts && <YouTube
                className={styles.video}
                videoId="J8-VMaDOXqs"
                opts={opts}
                onReady={onReady}
              />} */}
                <h2 className={styles.heading} style={{scrollMarginTop: 85}} id="rewards">Наши награды</h2>
                <p className={styles.text}>Мы получили бронзовую медаль на Варшавской выставке RemaDays, за инновационный продукт</p>
                <img className={styles.image} src="/img/png/prize.png" alt="Remadays prize" />
            </div>
        </section>
    )
}