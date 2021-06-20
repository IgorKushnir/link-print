import inks from '../../pages/api/inks';
import styles from './InksList.module.scss';
import InkItem from '../InkItem/InkItem';

export default function InksList ({setIsPopupOpened, setPopupProduct}) {
    return (
        <section id="inksList">
            <div className="container">
            <h2 className="section__header">Чернила и праймеры</h2>
            <ul className={styles.list}>
                    {inks.map( (ink, i) => (
                        <InkItem setIsPopupOpened={setIsPopupOpened} setPopupProduct={setPopupProduct} key={`ink_${i}`} ink={ink} />
                    ))}
                </ul>
            </div>
        </section>
    )
}