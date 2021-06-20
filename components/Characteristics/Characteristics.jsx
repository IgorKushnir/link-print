import styles from './Characteristics.module.scss';
import characteristics from '../../pages/api/characteristics';
import CharacteristicsItem from '../CharacteristicsItem/CharacteristicsItem'

export default function Characteristics () {
    return (<section  id="characteristics">
        <div className="container">
        <h2 className="section__header">Характеристики</h2>
        <h3 className={styles.subheading}>Скачайте полную информацию о нашей стандартной линейке</h3>
        <ul className={styles.characteristicsList}>
        {characteristics.map((characteristic, i) => <CharacteristicsItem key={`characteristic_${i}`} characteristic={characteristic} />)}
        </ul>
        </div>
    </section>)
} 