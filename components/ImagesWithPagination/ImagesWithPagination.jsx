import { useState } from 'react';
import styles from './ImagesWithPagination.module.scss';


export default function ImagesWithPagination({sample, selectedImage, setSelectedImage}) {
  const [touchStart, setTouchStart] = useState(0);
const [touchEnd, setTouchEnd] = useState(0);

function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
}

function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
}

function handleTouchEnd() {
    if (touchStart - touchEnd > 75) {
      setSelectedImage(prev => prev + 1)
    }

    if (touchStart - touchEnd < -75) {
      setSelectedImage(prev => prev - 1)
}
}
    return ( <>
        {sample && <>
        <ul className={styles.imagesList}>
          <li
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
            key={`${sample.title}_image_${selectedImage}`}
            className={styles.imagesItem}>
            <img
            // width="560"
            // height="860"
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
      </>}
      </>
      )
}