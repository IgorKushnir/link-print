import styles from './Service.module.scss';
import {useState} from 'react';

import ServiceModal from '../../components/ServiceModal/ServiceModal'

export default function Service () {
    const [isServicePopupOpened, setIsServicePopupOpened] = useState(false);

    return (
        <section id="service">
            {isServicePopupOpened && <ServiceModal setIsServicePopupOpened={setIsServicePopupOpened} />}
            <div className="container">
                <h2 className={styles.heading}>Сервисная поддержка</h2>
                <div className={styles.infoWrapper}>
                    <div className={styles.leftGroup}>
                       <div className={styles.innerLeft}>
                            <p className={styles.subheading}>Всегда Online</p>
                            <p>Группа сервисных инженеров всегда онлайн в любом из удобных мессенджеров</p>
                       </div>
                    </div>
                    <div className={styles.rightGroup}>
                        <p>Сервисная поддержка LinkPrint - это новая технология удаленного сервиса, которая поможет Вам общаться командой сервисных инженеров в режиме реального времени. Для решения возникшей проблемы, наши специалисты готовы подключиться к вашему производству в любую секунду, даже ночью.
Теперь экспертные знания наших специалистов доступны 24/7. Вам всегда оперативно окажут необходимую помощь и проконсультируют. Тем самым вы избежите простоя оборудования, срывов сроков, недовольных клиентов и других неприятностей. В случае необходимости команда наших инженеров готова выехать на ваше производство лично.</p>
                    </div>
                </div>
                <div className={styles.infoWrapper}>
                    <div className={styles.leftGroup}>
<img src="/img/jpg/service.jpg" className={styles.img} />
                    </div>
                    <div className={styles.rightGroup}>
                        <ul>
                            <li className={styles.serviceItem}>
                                <h3 className={styles.serviceText}>ОБУЧЕНИЕ ИСПОЛЬЗОВАНИЮ ПРИНТЕРА</h3>
                            </li>
                            <li className={styles.serviceItem}>
                                <h3 className={styles.serviceText}>НАСТРОЙКА ПАРАМЕТРОВ ПЕЧАТИ</h3>
                            </li>
                            <li className={styles.serviceItem}>
                                <h3 className={styles.serviceText}>ПОСТРОЕНИЕ ЦВЕТОВЫХ ПРОФИЛЕЙ</h3>
                            </li>
                        </ul>
                        <button className={styles.button} onClick={() => setIsServicePopupOpened(true)}>Заявка в сервисный центр</button>
                    </div>
                </div>
            </div>
        </section>
    )
}