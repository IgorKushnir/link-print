import inks from '../../pages/api/inks';
import styles from './InksList.module.scss';
import InkItem from '../InkItem/InkItem';

export default function InksList () {
    return (
        <section>
            <div className="container">
            <h2 className="section__header">Чернила и праймеры</h2>
            <ul className={styles.list}>
                    {inks.map( (ink, i) => (
                        <InkItem key={`ink_${i}`} ink={ink} />
                    ))}
                </ul>
            </div>
        </section>
    )
}