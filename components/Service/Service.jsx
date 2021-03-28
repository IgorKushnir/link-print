import styles from './Service.module.scss';
import {useState} from 'react';
import service from '../../pages/api/service';

export default function Service () {
    const [serviceTab, setServiceTab] = useState('1');

    return (
        <section>
            <div className="container">
                <div className={styles.buttonsWrapper}>
                    <button className={styles.buttonActive}>Сервис</button>
                    <button className={styles.button}>Больше о сервис</button>
                </div>
                {serviceTab === '1' && <div className={styles.aboutWrapper}>
                    <img src='/img/png/support.png' alt='Сервис' />
                    <p className={styles.text}>
                        Сервисная поддержка LinkPrint - это новая технология удаленного сервиса, которая поможет Вам общаться с сервисным инженером в режиме реального времени. Благодаря совместной работе через интерактивную видео конференцию Вы снижаете транспортные расходы, а в некоторых случаях и вовсе устраняете их. Теперь экспертные знания наших специалистов доступны 24/7, что заметно уменьшает время удаления неисправности, а значит сокращает время простоя машины.
                        Нашими инженерами технической поддержки ведется история решения Ваших проблем, благодаря накопленной информации и большому практическому опыту, а также технологии удаленного обслуживания, мы можем оперативно решить большинство стандартных проблем дистанционно, без выезда к клиенту.
                        Помимо этого, мы располагаем собственным производством машин, поэтому у нас всегда есть запчасти. В нашем офисе на постоянной основе работает команда опытных инженеров. Каждый из них принимает непосредственное участие в сборке и конструировании машин, а это значит, что Вам всегда оперативно окажут необходимую помощь и проконсультируют при необходимости. Тем самым Вы избежите простоя оборудования, срывов сроков, недовольных клиентов и других неприятностей.
                    </p>
                </div>}
                {serviceTab === '2' && <div className={styles.moreWrapper}>
                    <h2 className={styles.heading}>Мы различаем 4 вида сервисной поддержки</h2>
                    <ul className={styles.typesList}>
                        {service.map( (item, i) => (
                            <li key={`service_${i}`} className={styles.typesItem}>
                                <div className={styles.itemInnerWrap}>
                                    <h3 className={styles.subheading}>{item.title}</h3>
                                    <ul className={styles.subList}>
                                        {item.content.map((item, i) => (
                                            <li key={`${item.title}_feature_&{i}`} className={styles.subItem}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>}
            </div>
        </section>
    )
}