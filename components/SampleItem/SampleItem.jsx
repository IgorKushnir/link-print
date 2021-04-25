import {useState} from 'react';
import styles from './SampleItem.module.scss';
import YouTube from 'react-youtube';

export default function SampleItem({sample}) {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

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

  return (
    <li className={styles.item}>
      <h3 className={styles.title}>{sample.title}</h3>
      {sample.video && (
        <>
          {' '}
          <ul className={styles.videosList}>
            <li
              key={`${sample.title}_video_${selectedVideo}`}
              className={styles.videoItem}>
              <YouTube
                videoId={sample.video[selectedVideo]}
                opts={opts}
                onReady={onReady}
              />
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
        <>
          <ul className={styles.imagesList}>
            <li
              key={`${sample.title}_image_${selectedImage}`}
              className={styles.imagesItem}>
              <img
              width="560"
              height="860"
                className={styles.image}
                src={sample.images[selectedImage]}
              />
            </li>
          </ul>
          {sample.images.length > 1 && (
            <ul className={styles.paginationList}>
              {sample.images.map((image, i) => (
                <li
                  key={`${sample.title}_pagination_i_${i}`}
                  onClick={() => setSelectedImage(i)}
                  className={`${styles.paginationItem} ${
                    selectedImage === i ? styles.paginationItemActive : ''
                  }`}></li>
              ))}
            </ul>
          )}
        </>
      )}
    </li>
  );
}
