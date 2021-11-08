import styles from './Benefits.module.scss';
import benefits from '../../pages/api/benefits';

export default function Characteristics () {
    return (
    <section  id="characteristics">
        <div className="container">
        <h2 className={styles.title}>Почему нас выбирают</h2>
        
        <ul className={styles.list}>
            {benefits.map((benefit, i) => (
                <li className={styles.item} key={`benefit_${i}`}>
                    <div className={styles.titleWrap}>
                        <div>
                            <div className={styles.imgWrap}>
                                <img src={benefit.img} className={styles.img} />
                            </div>
                        </div>
                        <h3 className={styles.subtitle}>{benefit.title}</h3>
                    </div>
                    <p className={styles.text}>{benefit.description}</p>
                </li>
            ))}
        </ul>
        </div>
    </section>)
} 