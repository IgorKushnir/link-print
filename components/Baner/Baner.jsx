import styles from './Baner.module.scss';
import Link from 'next/link';
import {useState, useEffect, useRef} from 'react'
import YouTube from 'react-youtube';

export default function Baner({setIsDownloadPopupOpened, setIsPopupOpened}) {
    const [opts, setOpts] = useState(null);
    const wrap = useRef(null);

    useEffect(() => {
      const width = wrap.current ? wrap.current.clientWidth : 500;
      const height = wrap.current ? wrap.current.clientHeight : 500;
  
      setOpts({
        height,
        width,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          loop: 1,
          modestbranding: 1,
        },
      })
    }, [])

    
    return(
        <section className={styles.baner} ref={wrap}>
            {/* {opts && <YouTube
                videoId="KS4matSRE_s"
                opts={opts}
              />} */}
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