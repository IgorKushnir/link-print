import styles from './ReviewsList.module.scss';
import reviews from '../../pages/api/reviews';
import ReviewItem from '../ReviewItem/ReviewItem';

export default function ReviewsList() {
    return (
        <section className={styles.mainWrapper}>
            <div className="container">
                <h2 className="section__header">Что говорят наши клиенты?</h2>
                <h3 className={styles.subtitle}>UV печать стремительно развивается, некоторые наши клиенты возвращаются за второй машиной!</h3>
                <ul className={styles.list}>
                    {reviews.map( (review, i) => (
                        <ReviewItem key={`review_${i}`} review={review} />
                    ))}
                </ul>
            </div>
        </section>
    )
}