import { useState } from 'react';
import styles from './ProductPopup.module.scss';
import ImagesWithPagination from '../ImagesWithPagination/ImagesWithPagination';

export default function ProductPopup ({setIsPopupOpened, product}) {
const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className={styles.container}>
            <button type="button" className={styles.closeButton} onClick={() => setIsPopupOpened(false)}>
                <img className={styles.closeIcon} src="./img/png/cancel.png" />
            </button>
            <div className={styles.imagesWrapper}>
                <ImagesWithPagination sample={product} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            </div>
            <div className={styles.infoWrapper}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.description} className={styles.description}>{product.description}</p>
            </div>
        </div>
    )
}