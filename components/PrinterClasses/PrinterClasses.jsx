import styles from './PrinterClasses.module.scss';
import printerClasses from '../../pages/api/printerClasses';
import PrinterClassesItem from '../PrinterClassesItem/PrinterClassesItem';

export default function PrinterClasses() {
  return (
    <section>
      <div className='container'>
        <div className={styles.titleWrapper}>
          <h2 className={styles.titleTop}>Оборудование</h2>
          <h2 className={styles.titleBottom}>для всех задач</h2>
        </div>
        <ul className={styles.classesList}>
          {printerClasses.map(cl => (
            <PrinterClassesItem
              title={cl.title}
              print={cl.print}
              branches={cl.branches}
              link={cl.link}
              img={cl.img}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
