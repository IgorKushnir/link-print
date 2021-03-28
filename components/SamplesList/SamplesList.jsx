import samples from '../../pages/api/samples';
import styles from './SamplesList.module.scss';
import SampleItem from '../SampleItem/SampleItem';

export default function SamplesList () {
    return (
        <section>
            <div className="container">
            <h2 className="section__header">Примеры работ</h2>
            <ul className={styles.list}>
                    {samples.map( (sample, i) => (
                        <SampleItem key={`sample_${i}`} sample={sample} />
                    ))}
                </ul>
            </div>
        </section>
    )
}