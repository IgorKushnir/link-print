import styles from './ImagesWithPagination.module.scss';


export default function ImagesWithPagination({sample, selectedImage, setSelectedImage}) {
    return ( <>
        {sample && <>
        <ul className={styles.imagesList}>
          <li
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