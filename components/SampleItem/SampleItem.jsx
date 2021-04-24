import styles from './SampleItem.module.scss';

export default function SampleItem({sample}) {


    return(
        <li className={styles.item}>
                <h3 className={styles.title}>{sample.title}</h3>
                {sample.video && <ul className={styles.videosList}>
                    {sample.video.map ( (video, i) => (
                        <li key={`${sample.title}_video_${i}`} className={styles.videosItem}>
                            <video className={styles.video} src={video} />
                        </li>
                    ))}
                </ul>}
                {sample.images && <ul className={styles.imagesList}>
                        {sample.images.map((image, i) => (
                            <li key={`${sample.title}_image_${i}`} className={styles.imagesItem}>
                                <img className={styles.image} src={image} />
                            </li>
                        ))}
                    </ul>}
        </li>
    )
}