import {useState, useEffect} from 'react';
import styles from './SampleItem.module.scss';
import YouTube from 'react-youtube';

import ImagesWithPagination from '../ImagesWithPagination/ImagesWithPagination';

export default function SampleItem({sample}) {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
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
    <li className={styles.item} id={sample.id}>
      <h3 className={styles.title}>{sample.title}</h3>
      {sample.video && (
        <>
          <ul className={styles.videosList}>
            <li
              key={`${sample.title}_video_${selectedVideo}`}
              className={styles.videoItem}>
              {opts && <YouTube
                videoId={sample.video[selectedVideo]}
                opts={opts}
                onReady={onReady}
              />}
            </li>
          </ul>
          {sample.video.length > 1 && (
            <ul className={styles.paginationList}>
              {sample.video.map((video, i) => (
                <li
                  key={`${sample.title}_pagination_v_${i}`}
                  onClick={() => setSelectedVideo(i)}
                  className={`${styles.paginationItem} ${
                    selectedVideo === i ? styles.paginationItemActive : ''
                  }`}></li>
              ))}
            </ul>
          )}
        </>
      )}
      {sample.images && (
        <ImagesWithPagination sample={sample} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
      )}
    </li>
  );
}
