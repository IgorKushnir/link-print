import styles from './ServicesList.module.scss';
import servicesList from '../../pages/api/servicesList'
import ServiceItem from '../ServiceItem/ServiceItem'

export default function ServicesList () {
    return (
        <section>
            <div className="container">
                <h2 className="section__header">Услуги</h2>
                <ul className={styles.list}>
                    {servicesList.map( (service, i) => (
                        <ServiceItem key={`service_${i}`} service={service} />
                    ))}
                </ul>
            </div>
        </section>
    )
}