import styles from './ReviewsList.module.scss';
import {useState} from 'react';
import reviews from '../../pages/api/reviews';
import ReviewItem from '../ReviewItem/ReviewItem';

export default function ReviewsList() {

    const [selectedReview, setSelectedReview] = useState(0);

    return (
        <section className={styles.mainWrapper} id="reviewsList">
            <div className="container">
                <h2 className={styles.heading}>Отзывы наших клиентов</h2>
                        <ul>{reviews.map((review, i) => <ReviewItem key={`review_${i}`} review={review} />)}</ul>
            </div>
        </section>
    )
}