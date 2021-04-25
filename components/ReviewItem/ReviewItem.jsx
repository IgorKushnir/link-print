import styles from './ReviewItem.module.scss';

export default function ReviewItem({review}) {

    return(
        <div className={styles.item}>
            <p className={styles.text}>{review.text}</p>
            <h3 className={styles.author}>{review.author}</h3>
            <p className={styles.location}>{review.location}</p>
        </div>
    )
}