import styles from './ReviewsList.module.scss';
import {useState} from 'react';
import reviews from '../../pages/api/reviews';
import ReviewItem from '../ReviewItem/ReviewItem';

export default function ReviewsList() {

    const [selectedReview, setSelectedReview] = useState(0);

    return (
        <section className={styles.mainWrapper} id="reviewsList">
            <div className="container">
                <h2 className={styles.heading}>Что говорят наши клиенты?</h2>
                <h3 className={styles.subtitle}>UV печать стремительно развивается, некоторые наши клиенты возвращаются за второй машиной!</h3>
                        <ReviewItem key={`review_${selectedReview}`} review={reviews[selectedReview]} />
                {reviews.length > 1 && (
            <ul className={styles.paginationList}>
              {reviews.map((review, i) => (
                <li
                  key={`$review_pagination_v_${i}`}
                  onClick={() => setSelectedReview(i)}
                  className={`${styles.paginationItem} ${
                    selectedReview === i ? styles.paginationItemActive : ''
                  }`}></li>
              ))}
            </ul>
          )}
            </div>
        </section>
    )
}